import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { price, title, slug } = await req.json();
    const apiKey = process.env.NOWPAYMENTS_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing NOWPAYMENTS_API_KEY in Vercel" }, { status: 500 });
    }

    const response = await fetch("https://api.nowpayments.io/v1/invoice", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: price,
        price_currency: "usd",
        pay_currency: "usdttrc20",
        order_id: slug + "-" + Date.now(),
        order_description: `Pack: ${title}`,
        ipn_callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhook-crypto`,
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/packs/${slug}`
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "NOWPayments API Error" }, { status: 500 });
    }

    return NextResponse.json({ url: data.invoice_url });
  } catch (err: any) {
    return NextResponse.json({ error: "Internal Error: " + err.message }, { status: 500 });
  }
}