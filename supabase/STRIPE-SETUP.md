# Turning on payments (Stripe)

The database and both server functions are already live in your Supabase
project. Payments stay off until the two secrets below exist. Do everything
in Stripe's TEST mode first: no real money moves, and you pay with Stripe's
test card.

Never paste a Stripe key into a chat, an email, GitHub, or the app. They go
in one place only: Supabase -> Edge Functions -> Secrets.

## 1. Create the Stripe account
stripe.com -> Start now. Use your own details. You can skip "activate
payments" for now; test mode works without it.

## 2. Secret key -> Supabase
Stripe (test mode) -> Developers -> API keys -> reveal the **Secret key**
(`sk_test_...`), copy it.
Supabase -> Edge Functions -> Secrets -> Add new secret:
  Name:  STRIPE_SECRET_KEY
  Value: the key you copied

## 3. Tell Stripe where to report payments
Stripe -> Developers -> Webhooks -> Add endpoint (or "Add destination"):
  Endpoint URL:
    https://ljcdicnunebyylyinysl.supabase.co/functions/v1/stripe-webhook
  Events to send:
    checkout.session.completed
    customer.subscription.created
    customer.subscription.updated
    customer.subscription.deleted
After saving, reveal the **Signing secret** (`whsec_...`), copy it.
Supabase -> Edge Functions -> Secrets -> Add new secret:
  Name:  STRIPE_WEBHOOK_SECRET
  Value: the signing secret

## 4. Switch on the customer portal
Stripe -> Settings -> Billing -> Customer portal -> turn on "cancel
subscriptions" and "update payment method" -> Save. This is the page the
app's "Manage subscription" button opens.

## 5. Deploy the app and buy it with the test card
Upload the new `app/` and `site/` folders to GitHub. Open
app.cfidebrief.com, tap New Flight (you are past your 3 free flights),
Subscribe, and pay with:
  Card 4242 4242 4242 4242, any future date, any CVC, any ZIP
You should land back in the app and see "You're subscribed".

## 6. Going live
In Stripe, finish account activation (business details, bank account). Then
repeat steps 2-4 in LIVE mode: live secret key, a live webhook endpoint with
its own signing secret, live customer portal. Replace both Supabase secrets
with the live values. Test-mode subscriptions do not carry over, so your own
test purchase disappears and you subscribe again for real.

## Changing prices
Edit the one row in the `pricing` table (Supabase -> Table Editor), or use
the statements at the bottom of `billing.sql`. The app, the website and the
checkout all read that row. Existing subscribers keep the price they bought at.
