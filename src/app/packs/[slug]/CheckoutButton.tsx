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
        throw new Error("Server returned HTML instead of JSON.");
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
      className="w-full py-4 px-8 text-black font-semibold text-lg rounded-full bg-gradient-to-r from-white via-purple-50 to-purple-100 hover:shadow-[0_0_30px_rgba(200,180,255,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
    >
      {loading ? <Loader2 className="animate-spin" /> : `get this pack — $${price.toFixed(2)}`}
    </button>
  );
}