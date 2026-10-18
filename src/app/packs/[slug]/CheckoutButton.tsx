"use client";
import { useState } from "react";
import { Loader2, Skull } from "lucide-react";

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
      className="w-full py-4 px-8 text-white font-bold text-lg rounded-full bg-gradient-to-r from-orange-600 to-red-700 hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 border border-orange-500/50"
    >
      {loading ? <Loader2 className="animate-spin" /> : <><Skull size={20} /> get this pack — ${price.toFixed(2)}</>}
    </button>
  );
}