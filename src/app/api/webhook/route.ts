import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    
    console.log("✅ Payment successful for:", session.customer_details.email);
    
    const { error } = await supabaseAdmin.from("purchases").insert({
      email: session.customer_details.email,
      stripe_session_id: session.id,
      amount_cents: session.amount_total,
      product_id: "11111111-1111-1111-1111-111111111111", 
    });

    if (error) {
      console.error("❌ Supabase Insert Error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    
    console.log("✅ Successfully saved to Supabase!");
  }

  return NextResponse.json({ received: true });
}