// Debrief — billing
//
// The app's only door to Stripe. Two actions, both for the signed-in caller:
//   checkout  -> a Stripe Checkout link for a yearly subscription
//   portal    -> a link to Stripe's own manage / cancel page
//
// What the app sends is { action, return_to }. It does not send a price, a
// user id, or a card: the price comes from the `pricing` row, the user from
// their verified token, and the card is typed on Stripe's page. Changing what
// the app sends therefore cannot change what anyone is charged.
//
// Secrets (set in Supabase -> Edge Functions -> Secrets, never in the app):
//   STRIPE_SECRET_KEY   sk_test_... while testing, sk_live_... when live

const SB_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;
const STRIPE_KEY = Deno.env.get("STRIPE_SECRET_KEY") ?? "";

// the only places a customer may be sent back to after paying
const RETURN_TO = ["https://app.cfidebrief.com/", "https://debrief-app-nine.vercel.app/"];
const ORIGINS = RETURN_TO.map((u) => new URL(u).origin);

// What Debrief is, for sales-tax purposes: "Software as a service - business
// use". Stripe needs this on the product to work out tax, and refuses the
// checkout without it when Managed Payments is on for the account.
const TAX_CODE = "txcd_10103001";

function cors(req: Request) {
  const o = req.headers.get("origin") ?? "";
  return {
    "Access-Control-Allow-Origin": ORIGINS.includes(o) ? o : ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}
function reply(req: Request, status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(req), "Content-Type": "application/json" },
  });
}

// ---- database, as the server (bypasses row-level security: keep it in here)
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

// ---- Stripe, by plain HTTPS. Stripe takes form fields, with brackets for nesting.
class StripeError extends Error {
  code?: string;
  param?: string;
  constructor(m: string, code?: string, param?: string) {
    super(m);
    this.code = code;
    this.param = param;
  }
}
function form(obj: Record<string, unknown>, prefix = "", out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === "object") form(v as Record<string, unknown>, key, out);
    else out.append(key, String(v));
  }
  return out;
}
async function stripe(path: string, params: Record<string, unknown>) {
  const r = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRIPE_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form(params),
  });
  const j = await r.json();
  if (!r.ok) throw new StripeError(j?.error?.message ?? "Stripe error", j?.error?.code, j?.error?.param);
  return j;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });
  if (req.method !== "POST") return reply(req, 405, { error: "POST only" });
  if (!STRIPE_KEY) return reply(req, 503, { error: "Payments are not switched on yet." });

  try {
    // who is asking: Supabase checks the token, we do not trust anything in the body
    const auth = req.headers.get("authorization") ?? "";
    const who = await fetch(`${SB_URL}/auth/v1/user`, { headers: { apikey: ANON, Authorization: auth } });
    if (!who.ok) return reply(req, 401, { error: "Sign in again." });
    const user = await who.json();
    if (!user?.id) return reply(req, 401, { error: "Sign in again." });

    const body = await req.json().catch(() => ({}));
    const action = body?.action;
    const back = RETURN_TO.includes(body?.return_to) ? body.return_to : RETURN_TO[0];

    const [profile] = await db(`profiles?id=eq.${user.id}&select=plan,paid_until,stripe_customer_id`);
    if (!profile) return reply(req, 404, { error: "No profile for this account." });

    const newCustomer = async () => {
      const c = await stripe("customers", { email: user.email, metadata: { user_id: user.id } });
      await db(`profiles?id=eq.${user.id}`, { method: "PATCH", body: JSON.stringify({ stripe_customer_id: c.id }) });
      return c.id as string;
    };

    if (action === "portal") {
      if (!profile.stripe_customer_id) return reply(req, 409, { error: "No subscription on this account." });
      const p = await stripe("billing_portal/sessions", { customer: profile.stripe_customer_id, return_url: back });
      return reply(req, 200, { url: p.url });
    }

    if (action !== "checkout") return reply(req, 400, { error: "Unknown action." });

    const paid = profile.plan === "paid" && (!profile.paid_until || Date.parse(profile.paid_until) > Date.now());
    if (paid) return reply(req, 409, { already: true });

    const [price] = await db("pricing?id=eq.1&select=*");
    if (!price) return reply(req, 500, { error: "No price is set." });
    const onSale = typeof price.sale_price_cents === "number" &&
      price.sale_price_cents < price.list_price_cents &&
      (!price.sale_ends_at || Date.parse(price.sale_ends_at) > Date.now());
    const amount = onSale ? price.sale_price_cents : price.list_price_cents;

    const newProduct = async () => {
      const p = await stripe("products", {
        name: "Debrief",
        description: "Maneuver grading and student debriefs for flight instructors.",
        tax_code: TAX_CODE,
      });
      await db("pricing?id=eq.1", { method: "PATCH", body: JSON.stringify({ stripe_product_id: p.id }) });
      return p.id as string;
    };

    let product: string = price.stripe_product_id ?? (await newProduct());
    let customer: string = profile.stripe_customer_id ?? (await newCustomer());

    const open = () =>
      stripe("checkout/sessions", {
        mode: "subscription",
        customer,
        client_reference_id: user.id,
        // the amount is fixed on the subscription at the moment of purchase,
        // which is what "locked in for as long as you stay subscribed" means
        line_items: {
          0: {
            quantity: 1,
            // inclusive: the customer pays exactly the advertised price, and
            // any sales tax comes out of it rather than being added on top
            price_data: {
              currency: price.currency ?? "usd",
              product,
              unit_amount: amount,
              recurring: { interval: "year" },
              tax_behavior: "inclusive",
            },
          },
        },
        subscription_data: { metadata: { user_id: user.id } },
        success_url: `${back}?paid=1`,
        cancel_url: `${back}?paid=0`,
      });

    let session;
    try {
      session = await open();
    } catch (e) {
      // ids saved in test mode do not exist in live mode (and the reverse):
      // make the missing one again and try once more
      if (!(e instanceof StripeError)) throw e;
      if (/tax code/i.test(e.message)) {
        // a product made before the tax code was added: put it on, once
        await stripe(`products/${product}`, { tax_code: TAX_CODE });
      } else if (e.code !== "resource_missing") throw e;
      else if ((e.param ?? "").includes("product")) product = await newProduct();
      else if ((e.param ?? "").includes("customer")) customer = await newCustomer();
      else throw e;
      session = await open();
    }
    return reply(req, 200, { url: session.url });
  } catch (e) {
    console.error("billing", e);
    const msg = e instanceof StripeError ? e.message : "Couldn't start checkout. Try again.";
    return reply(req, 500, { error: msg });
  }
});
