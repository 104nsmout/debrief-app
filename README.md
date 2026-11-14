# Debrief

One repository, two websites:

| Folder      | What it is                         | Address              |
|-------------|------------------------------------|----------------------|
| `site/`     | Landing page, About, Log in        | cfidebrief.com       |
| `app/`      | The grading app                    | app.cfidebrief.com   |
| `supabase/` | Database script and setup notes    | (not deployed)       |

Each website is its own Vercel project pointed at its own folder, so a change
to the landing page never redeploys the app, and the reverse.

Nothing is built on Vercel. Each folder is already the finished website;
Vercel serves the files as they are.

## Payments

`supabase/functions/billing` hands the app a Stripe Checkout link;
`supabase/functions/stripe-webhook` is what Stripe calls when someone pays.
Both are deployed to Supabase, not Vercel. Prices live in the `pricing` table.
See `supabase/STRIPE-SETUP.md`.

## Changing things later

- Edit the landing page: change files in `site/`, commit. Only cfidebrief.com redeploys.
- Ship a new app version: replace the files in `app/`, commit. Only app.cfidebrief.com redeploys.
- Change the database: edit `supabase/schema.sql`, then run it in the Supabase SQL editor.
  Committing it does not change the database; the file is the record of what you ran.

## Keys

The app contains only the Supabase publishable key (`sb_publishable_...`), which
is safe to be public. Never commit the secret / service_role key: it bypasses
row-level security and can read every user's data.
