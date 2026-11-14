// Debrief — Stripe webhook
//
// Stripe calls this when a payment succeeds, a subscription renews, or one
// ends. It is the ONLY thing that writes `plan` and `paid_until`.
//
// Anyone on the internet can POST to this address, so nothing in a request is
// believed until its signature checks out against STRIPE_WEBHOOK_SECRET: only
// Stripe and this function know that secret.
//
// Secrets (Supabase -> Edge Functions -> Secrets):
//   STRIPE_SECRET_KEY       to look up the subscription's renewal date
//   STRIPE_WEBHOOK_SECRET   whsec_..., shown when you add the endpoint in Stripe

const SB_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const STRIPE_KEY = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const HOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";
const TOLERANCE_S = 300; // reject anything signed more than five minutes ago (replays)

const enc = new TextEncoder();
const hex = (b: ArrayBuffer) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
function sameString(a: string, b: string) {
  // constant-time: do not leak how many leading characters matched
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
async function signedByStripe(raw: string, header: string) {
  const parts = header.split(",").map((p) => p.trim().split("="));
  const t = parts.find((p) => p[0] === "t")?.[1];
  const sigs = parts.filter((p) => p[0] === "v1").map((p) => p[1]);
  if (!t || !sigs.length) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > TOLERANCE_S) return false;
  const key = await crypto.subtle.importKey("raw", enc.encode(HOOK_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const want = hex(await crypto.subtle.sign("HMAC", key, enc.encode(`${t}.${raw}`)));
  return sigs.some((s) => sameString(s, want));
}

async function db(path: string, init: RequestInit = {}) {
  const r = await fetch(`${SB_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SERVICE,
      Authorization: `Bearer ${SERVICE}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(init.headers ?? {}),
    },
  });
  if (!r.ok) throw new Error(`db ${r.status}: ${await r.text()}`);
  return r.json();
}
async function stripeGet(path: string) {
  const r = await fetch(`https://api.stripe.com/v1/${path}`, { headers: { Authorization: `Bearer ${STRIPE_KEY}` } });
  const j = await r.json();
  if (!r.ok) throw new Error(j?.error?.message ?? "Stripe error");
  return j;
}

// newer Stripe API versions moved the period end onto the subscription item
// deno-lint-ignore no-explicit-any
function periodEnd(sub: any): string | null {
  const s = sub?.current_period_end ?? sub?.items?.data?.[0]?.current_period_end;
  return typeof s === "number" ? new Date(s * 1000).toISOString() : null;
}
const isUuid = (s: unknown) => typeof s === "string" && /^[0-9a-f-]{36}$/i.test(s);

// deno-lint-ignore no-explicit-any
async function applySubscription(sub: any, uidHint?: string) {
  const live = ["active", "trialing", "past_due"].includes(sub.status);
  const uid = isUuid(uidHint) ? uidHint : isUuid(sub?.metadata?.user_id) ? sub.metadata.user_id : null;
  const where = uid ? `id=eq.${uid}` : `stripe_customer_id=eq.${encodeURIComponent(sub.customer)}`;
  const [profile] = await db(`profiles?${where}&select=id,stripe_subscription_id`);
  if (!profile) {
    console.warn("no profile for subscription", sub.id);
    return;
  }
  // an old subscription ending must not cancel a newer one on the same account
  if (!live && profile.stripe_subscription_id && profile.stripe_subscription_id !== sub.id) return;
  await db(`profiles?id=eq.${profile.id}`, {
    method: "PATCH",
    body: JSON.stringify(
      live
        ? { plan: "paid", paid_until: periodEnd(sub), stripe_customer_id: sub.customer, stripe_subscription_id: sub.id }
        : { plan: "free", paid_until: null },
    ),
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("POST only", { status: 405 });
  if (!HOOK_SECRET || !STRIPE_KEY) return new Response("not configured", { status: 503 });

  const raw = await req.text();
  if (!(await signedByStripe(raw, req.headers.get("stripe-signature") ?? ""))) {
    return new Response("bad signature", { status: 400 });
  }

  try {
    const event = JSON.parse(raw);
    const obj = event?.data?.object;
    switch (event.type) {
      case "checkout.session.completed":
        if (obj.mode === "subscription" && obj.subscription) {
          await applySubscription(await stripeGet(`subscriptions/${obj.subscription}`), obj.client_reference_id);
        }
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        // re-read it: events can arrive out of order, the API is the truth
        await applySubscription(
          event.type === "customer.subscription.deleted" ? obj : await stripeGet(`subscriptions/${obj.id}`),
        );
        break;
    }
    return new Response(JSON.stringify({ received: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    // a 500 makes Stripe try again later, which is what we want if the database blinked
    console.error("stripe-webhook", e);
    return new Response("error", { status: 500 });
  }
});
