-- Debrief — billing
-- Run after schema.sql. Safe to run again.

-- ------------------------------------------------------- what Stripe told us
-- Written ONLY by the stripe-webhook edge function (service key). Users can
-- read their own row, never write these columns: the column grants in
-- schema.sql list the only three columns a user may update.
alter table public.profiles add column if not exists paid_until timestamptz;
alter table public.profiles add column if not exists stripe_customer_id text;
alter table public.profiles add column if not exists stripe_subscription_id text;
create unique index if not exists profiles_stripe_customer_idx
  on public.profiles (stripe_customer_id) where stripe_customer_id is not null;

-- ------------------------------------------------------------------ pricing
-- ONE row. This is the price list for the whole product: the app's subscribe
-- screen reads it, and the billing function charges from it. To change a
-- price, edit this row (Table Editor, or the statements at the bottom).
-- Amounts are in cents.
create table if not exists public.pricing (
  id                 int         primary key default 1 check (id = 1),
  list_price_cents   int         not null check (list_price_cents >= 100),
  -- null = no sale running. When set and lower than list, the app shows the
  -- list price struck through next to this one.
  sale_price_cents   int         check (sale_price_cents is null or sale_price_cents >= 100),
  -- null = sale runs until you clear sale_price_cents
  sale_ends_at       timestamptz,
  sale_label         text        not null default '',
  free_flights       int         not null default 3 check (free_flights >= 0),
  currency           text        not null default 'usd',
  -- filled in by the billing function the first time someone checks out
  stripe_product_id  text,
  updated_at         timestamptz not null default now()
);

insert into public.pricing (id, list_price_cents, sale_price_cents, sale_label, free_flights)
values (1, 2500, 500, 'Founding-member price', 3)
on conflict (id) do nothing;

alter table public.pricing enable row level security;

drop policy if exists "prices are public" on public.pricing;
create policy "prices are public" on public.pricing
  for select to anon, authenticated using (true);

-- readable by anyone (it is a price tag); writable by nobody but you and the
-- server. The Stripe product id is not part of the public columns.
revoke all on public.pricing from anon, authenticated;
grant select (id, list_price_cents, sale_price_cents, sale_ends_at, sale_label, free_flights, currency)
  on public.pricing to anon, authenticated;


-- ================================================================ FOR YOU
-- Change the sale price to $7:
--   update public.pricing set sale_price_cents = 700, updated_at = now();
-- End the sale (everyone new pays list price):
--   update public.pricing set sale_price_cents = null, updated_at = now();
-- Put an end date on the sale (shown on the subscribe screen):
--   update public.pricing set sale_ends_at = '2026-12-05 23:59-07', updated_at = now();
-- Change the regular price:
--   update public.pricing set list_price_cents = 3000, updated_at = now();
-- Change how many free flights a new account gets:
--   update public.pricing set free_flights = 5, updated_at = now();
--
-- A price change applies to NEW subscribers. People already subscribed keep
-- the price they signed up at; that is what "locked in" means.
--
-- Who is paying:
--   select u.email, p.full_name, p.paid_until from public.profiles p
--   join auth.users u on u.id = p.id where p.plan = 'paid' order by p.paid_until;
