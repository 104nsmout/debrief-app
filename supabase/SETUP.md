# Debrief accounts: what you do in Supabase

The app code is done and tested against a stand-in server. These steps connect
it to your real project (`ljcdicnunebyylyinysl`). Do them in order.

## 1. Create the tables
Supabase dashboard -> SQL Editor -> New query. Paste all of `debrief-schema.sql`
and press Run. It is safe to run twice.

Why: this creates `profiles` (name, role, mailing opt-in, plan) and `flights`
(the backup), and turns on row-level security so each user can only read and
write their own rows.

## 2. Make the email contain a code, not a link
Authentication -> Emails -> Templates. Edit BOTH "Magic Link" and "Confirm
signup" so the body shows the code, for example:

    Your Debrief code is {{ .Token }}

Why: the app asks for a six-digit code. A link opens Safari, which is a
separate storage area from the app on the home screen, so the link would sign
in the wrong place.

Also check Authentication -> Sign In / Providers -> Email: the provider is on,
and "Email OTP length" is 6.

Also Authentication -> URL Configuration: set Site URL to
`https://app.cfidebrief.com`. The code flow doesn't use it, but Supabase puts
it in some default emails, and it should name the real app.

## 3. Set up real email sending (required before anyone else can sign up)
Supabase's built-in email only delivers to members of your Supabase team and
is capped at 2 messages an hour. Until you add your own sender, you are the
only person who can receive a code.

Authentication -> Emails -> SMTP Settings -> enable custom SMTP. Resend,
Postmark and SendGrid all work; you will need to verify cfidebrief.com with
whichever you pick (they give you DNS records to add at Namecheap). After
that the limit starts at 30 emails an hour and you can raise it under
Authentication -> Rate Limits.

## 4. Deploy the app
Replace the contents of your GitHub repo with the `dist/` folder as usual and
let Vercel deploy. On the next launch every existing user sees the sign-up
screen. Their flights stay on the phone and upload after they sign in.

## 5. Prove it with your own email
1. Open the app, enter your email, type the code, enter your name.
2. Grade and close out one flight.
3. In Supabase -> Table Editor: `profiles` has your row with your name;
   `flights` has one row.
4. Authentication -> Users shows you.

If step 1 fails, the message on screen is Supabase's own error text; send it
to me.

## 6. Before you invite other instructors
- A privacy policy and terms page, linked from the sign-up screen. You are now
  storing email addresses and student training records, some for minors.
- An unsubscribe link in any marketing email. Only email people where
  `marketing_opt_in` is true.

## Keys
Only the publishable key (`sb_publishable_...`) is in the app. Never put the
secret / service_role key in the app, the website, or GitHub: it bypasses
row-level security and can read every user's data.

## Seeing your users
The bottom of `debrief-schema.sql` has three queries to paste into the SQL
editor: who signed up, the mailing list, and flights per user.
