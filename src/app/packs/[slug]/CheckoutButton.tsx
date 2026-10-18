"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function CheckoutButton({ price, title, slug }: { price: number, title: string, slug: string }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout-crypto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price, title, slug }),
      });
      
      const text = await res.text();
      let data;
      
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Server returned HTML. Check Vercel logs for crash.");
      }
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("⚠️ Error: " + (data.error || "Unknown error"));
        setLoading(false);
      }
    } catch (err: any) {
      alert("⚠️ " + err.message);
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      disabled={loading}
      className="btn-glow w-full py-4 px-8 text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Buy Now - Pay with Crypto"}
    </button>
  );
}