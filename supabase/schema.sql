-- Debrief — sync schema
-- Paste this whole file into the Supabase SQL editor and run it once.
-- Safe to run again: every statement is idempotent.

-- ---------------------------------------------------------------- flights
-- One row per flight. The flight object itself stays as JSON, in the exact
-- shape the app already holds in localStorage, so the client never has to
-- translate between two models. The columns outside `data` exist only so the
-- server can filter without parsing JSON.
create table if not exists public.flights (
  id          uuid        primary key,
  user_id     uuid        not null default auth.uid()
                          references auth.users(id) on delete cascade,
  student     text,
  flown_at    timestamptz,
  lib_key     text,
  data        jsonb       not null,
  -- set by the DEVICE, not the server: a grade written at 4,500 feet may not
  -- reach here for two hours, and the server's clock would make it look newer
  -- than edits made on the ground afterwards
  updated_at  timestamptz not null,
  -- a tombstone, not a deletion. Remove the row and any device that was
  -- offline at the time of the delete will helpfully upload its copy again and the
  -- flight comes back from the dead.
  deleted     boolean     not null default false
);

-- the only query the app makes: everything of mine that changed since X
create index if not exists flights_user_updated_idx
  on public.flights (user_id, updated_at desc);

alter table public.flights enable row level security;

-- `using` decides which rows you may see and change.
-- `with check` decides what a row is allowed to look like AFTER you write it.
-- Without the second clause a user can insert rows stamped with someone
-- else's user_id: unreadable to them, but written into another instructor's
-- data. Both clauses, always.
drop policy if exists "own flights" on public.flights;
create policy "own flights" on public.flights
  for all
  to authenticated
  using      (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ---------------------------------------------------------------- profiles
-- One row per user, holding the paywall flag. Deliberately NOT writable by
-- the user: they may read their own plan, and nothing more. If a customer
-- could update this row they would simply set it to 'paid'. Only the Stripe
-- webhook, running with the secret key, writes here.
create table if not exists public.profiles (
  id          uuid        primary key references auth.users(id) on delete cascade,
  plan        text        not null default 'free',
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);


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

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
