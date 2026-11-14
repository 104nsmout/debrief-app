-- Debrief — accounts and flight backup
-- Paste this whole file into the Supabase SQL editor and run it once.
-- Safe to run again: every statement is idempotent.

-- ---------------------------------------------------------------- profiles
-- One row per user, created by the trigger further down the moment they
-- verify their email.
--
-- `plan` is the paywall flag and is deliberately NOT writable by the user.
-- Column-level grants below let a user change their name and their mailing
-- preference and nothing else; if they could update `plan` they would set it
-- to 'paid'. Only a Stripe webhook running with the secret key writes it.
create table if not exists public.profiles (
  id          uuid        primary key references auth.users(id) on delete cascade,
  plan        text        not null default 'free',
  created_at  timestamptz not null default now()
);

alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists role text not null default 'instructor';
alter table public.profiles add column if not exists marketing_opt_in boolean not null default false;
-- when they said yes. Set by the database, not the client, so it can be
-- trusted as a consent record.
alter table public.profiles add column if not exists marketing_opt_in_at timestamptz;

alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('instructor', 'student'));
alter table public.profiles drop constraint if exists profiles_name_len;
alter table public.profiles add constraint profiles_name_len
  check (full_name is null or char_length(full_name) between 1 and 80);

alter table public.profiles enable row level security;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select to authenticated
  using ((select auth.uid()) = id);

-- `using` decides which rows you may touch; `with check` decides what the row
-- may look like afterwards. Both, always: without the second a user could
-- re-point their row at someone else's id.
drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles
  for update to authenticated
  using      ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- the policy says WHICH ROW; these grants say WHICH COLUMNS.
revoke all on public.profiles from anon;
revoke insert, update, delete on public.profiles from authenticated;
grant select on public.profiles to authenticated;
grant update (full_name, role, marketing_opt_in) on public.profiles to authenticated;

create or replace function public.stamp_opt_in()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.marketing_opt_in is distinct from old.marketing_opt_in then
    new.marketing_opt_in_at := case when new.marketing_opt_in then now() else null end;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_stamp_opt_in on public.profiles;
create trigger profiles_stamp_opt_in
  before update on public.profiles
  for each row execute function public.stamp_opt_in();


-- ------------------------------------------------- a profile on every signup
-- security definer so it can write to profiles regardless of the new user's
-- own permissions; search_path pinned so the function can't be hijacked by a
-- schema placed ahead of public.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict (id) do nothing;
  return new;
end;
$$;

-- only the trigger should ever run this
revoke execute on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- anyone who signed up before this file was run
insert into public.profiles (id)
  select id from auth.users on conflict (id) do nothing;


-- ---------------------------------------------------------------- flights
-- One row per flight. The flight object stays as JSON in the exact shape the
-- app holds in localStorage, so the client never translates between two
-- models. The columns outside `data` exist so the server can filter and so
-- you can count without parsing JSON.
--
-- An earlier draft of this table keyed flights by a uuid. The app's flight
-- ids are timestamps, unique per phone but not across users, so the key is
-- (user_id, id). The old table is replaced only if it is empty.
do $$
begin
  if exists (select 1 from information_schema.columns
             where table_schema = 'public' and table_name = 'flights'
               and column_name = 'id' and data_type = 'uuid')
     and not exists (select 1 from public.flights) then
    drop table public.flights;
  end if;
end $$;

create table if not exists public.flights (
  user_id     uuid        not null default auth.uid()
                          references auth.users(id) on delete cascade,
  id          text        not null check (char_length(id) between 1 and 64),
  student     text,
  flown_at    timestamptz,
  lib_key     text,
  data        jsonb       not null,
  -- set by the DEVICE: a grade written at 4,500 feet may not reach here for
  -- two hours, and the server clock would make it look newer than it is
  updated_at  timestamptz not null,
  -- a tombstone, not a deletion. Remove the row and a phone that was offline
  -- at the time uploads its copy again and the flight comes back from the dead.
  deleted     boolean     not null default false,
  primary key (user_id, id)
);

create index if not exists flights_user_flown_idx
  on public.flights (user_id, flown_at desc);

alter table public.flights enable row level security;

drop policy if exists "own flights" on public.flights;
create policy "own flights" on public.flights
  for all to authenticated
  using      ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

revoke all on public.flights from anon;
-- tombstones only: Supabase grants DELETE to signed-in users by default
revoke delete, truncate, references, trigger on public.flights from authenticated;
revoke delete, truncate, references, trigger on public.profiles from authenticated;
grant select, insert, update on public.flights to authenticated;


-- ================================================================ FOR YOU
-- Run these in the SQL editor whenever you want numbers. They work for you
-- because the editor runs as the project owner; no user can run them.
--
-- Who has signed up:
--   select u.email, p.full_name, p.role, p.marketing_opt_in, u.created_at, u.last_sign_in_at
--   from auth.users u join public.profiles p on p.id = u.id
--   order by u.created_at desc;
--
-- Mailing list (only people who ticked the box):
--   select u.email, p.full_name from auth.users u
--   join public.profiles p on p.id = u.id where p.marketing_opt_in;
--
-- Usage, counts only (no student names):
--   select u.email, count(*) as flights, max(f.flown_at) as last_flight
--   from public.flights f join auth.users u on u.id = f.user_id
--   where not f.deleted group by u.email order by flights desc;
