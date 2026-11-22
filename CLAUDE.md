# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Debrief: an in-cockpit maneuver-grading PWA for flight instructors that writes the student debrief. One repo, two static websites plus a Supabase backend:

| Folder      | What it is                                   | Deployed to                         |
|-------------|----------------------------------------------|-------------------------------------|
| `app/`      | The grading app (installable PWA)            | app.cfidebrief.com (Vercel project) |
| `site/`     | Marketing pages: home, about, pricing, Part 141, legal | cfidebrief.com (Vercel project) |
| `supabase/` | SQL, Edge Functions, setup notes             | Supabase project `ljcdicnunebyylyinysl` (not Vercel) |

## Commands

There is no build, no package.json, no linter and no test suite. Each Vercel project serves its folder as-is; pushing to `main` deploys whichever of `app/` / `site/` changed.

- Run locally: serve a folder statically, e.g. `npx serve app` or `python -m http.server -d app 8000`, and open it in a browser. The service worker only registers on `localhost` or HTTPS.
- Database: `supabase/schema.sql` and `supabase/billing.sql` are idempotent scripts run by hand in the Supabase SQL editor (or via the Supabase MCP). Committing them does not change the database; the files are the record of what was run.
- Edge Functions (`supabase/functions/billing`, `supabase/functions/stripe-webhook`) are Deno/TypeScript, deployed to Supabase (CLI `supabase functions deploy <name>` or the Supabase MCP). Their secrets (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, optional `STRIPE_PUBLISHABLE_KEY`) live only in Supabase -> Edge Functions -> Secrets.

## The app (`app/index.html`)

The whole app is one ~4,600-line `index.html`: inline CSS, an early `<script>` for Sentry, a splash script, and one big IIFE (`"use strict"`, ES5 style: `var`, `function`, no modules, no framework). Find things by grepping function names; the main pieces in order:

- **Task libraries** (`LIB`, built with `T()`, `AREA()`, `DT()`, `RT()`): per-certificate ACS tasks (ppl, instrument, commercial, cfi, cfii, ipc...) with tolerances and "standards not met" reasons. Syllabi/lessons via `L()`; `lvlName` codes I/P/M = Introduced / Practiced / ACS standard.
- **Auth**: hand-rolled against Supabase REST/Auth with `fetch` (`sbFetch`, `sendCode`, `verifyCode`); no supabase-js. Sign-in is a 6-digit email OTP, deliberately not a magic link (a link opens Safari, which has separate storage from the home-screen app). Only the publishable key `SB_KEY` is in the app.
- **Sync**: local-first. `S` is the whole app state, saved to `localStorage` under `debrief.v1` by `save()`, which also calls `markEdits()` + `scheduleSync()`. `syncNow` pushes changed flights / deletes and pulls remote rows; `mergeRows` resolves by latest `updated_at`. Data must keep working offline and survive a user who never signs in.
- **Billing / paywall**: price comes from the public `pricing` row (cached in `debrief.price.v1`); `freeLeft()`, `needsPay()`, `isPaid()` gate new flights. Anonymous "try" flights are counted in `debrief.tries.v1`. `billing(action)` calls the `billing` Edge Function for a Stripe Checkout or portal URL; embedded checkout is used when Stripe.js loads.
- **Views**: `<section id="v-home|v-learn|v-lesson|v-setup|v-grade|v-close|v-debrief">`, switched by `show(v)`; each has a `render*()` function. Flow: setup (pick student, course, tasks) -> grade -> close (Hobbs/times) -> debrief (text, logbook entry, shareable canvas image).
- Other `localStorage` keys are versioned `debrief.<name>.v1`. Changing a stored shape needs a migration (`migrateEntry` / `migrateFlight` / `migrateAll` pattern), since real users have data on their phones.
- Theme accent follows the certificate (`data-lib` attribute via `applyLib`); grade colors never change.

### Service worker (`app/sw.js`)
Stale-while-revalidate for the shell and the font/Sentry CDNs; the `debrief-audio` cache is managed by the app and must be kept on activate. **Whenever `app/index.html` (or another shell file) changes, change `VERSION` in `sw.js`** to a new 12-hex-char value (e.g. first 12 chars of `sha256sum app/index.html`). Despite the file's comment, there is no build step that does this; every app commit bumps it by hand. `app/vercel.json` makes `index.html` and `sw.js` uncached at the edge so updates land on the next launch.

## The site (`site/`)
Plain hand-written HTML pages, each with its own inline CSS and a duplicated header/footer nav: adding or renaming a page means editing the nav in every page. `site/index.html` reads live prices from the Supabase `pricing` table with the publishable key, so price copy should come from there, not be hard-coded.

## Supabase
- `profiles` (one per user, created by the `handle_new_user` trigger) and `flights` (the synced backup), both with row-level security. `profiles.plan` is the paywall flag and is deliberately not writable by users: column-level grants allow only `full_name`, `role`, `marketing_opt_in`. Keep it that way; only the Stripe webhook (service role) writes `plan`.
- `pricing` (one row, `id = 1`, publicly readable): list/sale price, sale end, free flight count. The app, the site and checkout all read it.
- `billing` function: the app sends only `{ action, return_to }`; price comes from the `pricing` row and the user from their token. `return_to` must be in its `RETURN_TO` allow-list (also used for CORS).
- `stripe-webhook`: verifies the Stripe signature and is the only writer of `profiles.plan` / `paid_until` (no `paid_until` on a paid plan means a complimentary account, see `isComp()`).
- `supabase/SETUP.md` and `STRIPE-SETUP.md` are the owner-facing setup steps. Some names in SETUP.md are stale (it says `debrief-schema.sql` and a `dist/` folder; the real ones are `supabase/schema.sql` and `app/`).

## Project conventions
- The owner is not a developer: explain changes in plain English and how to check them.
- `main` is live for both sites. Use a short branch per change; Vercel gives branch previews.
- The user's global standards expect `docs/SPEC.md` and `docs/DECISIONS.md`; neither exists yet in this repo.
