"use client";
import Link from "next/link";
import { ShieldCheck, Zap, Star, Check, Users, ShoppingBag } from "lucide-react";
import CheckoutButton from "./CheckoutButton";
import { useState, use } from "react";
import { motion } from "framer-motion";

const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
];

const RECENT_BUYERS = [
  "Alex from US just bought this", "Sarah from UK just bought this",
  "Mohamed from UAE just bought this", "Yuki from JP just bought this",
];

export default function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [activeImg, setActiveImg] = useState(0);
  
  const pack = {
    title: slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
    price: 7.00,
    description: "10 desktop wallpapers about what success really looks like — Let's Make Lots of Money, Rolex, LV Matcha, Cartier Ice Cream, Super Rich Kids and more. Quiet luxury with a wink.",
  };

  return (
    <div className="w-full min-h-screen pt-20 md:pt-24 bg-[#050505] relative overflow-hidden font-sans">
      <div className="lightning-glow top-1/4 left-1/4 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <Link href="/" className="text-sm text-[#888888] hover:text-white mb-6 md:mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-4 md:gap-6">
            <motion.div 
              key={activeImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] bg-[#0A0A0A] rounded-2xl md:rounded-3xl p-4 md:p-8 flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl group"
            >
              <div className="relative w-full max-w-[300px] md:max-w-[400px] flex flex-col items-center z-10">
                <div className="bg-black rounded-lg md:rounded-xl p-1 md:p-2 border border-gray-700 shadow-2xl w-full">
                  <img src={MOCK_IMAGES[activeImg]} alt="Wallpaper" className="w-full aspect-video object-cover rounded md:rounded-lg opacity-90" />
                </div>
                <div className="flex flex-col items-center relative z-0">
                  <div className="w-12 md:w-16 h-10 md:h-14 bg-gradient-to-b from-gray-400 to-gray-500"></div>
                  <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 rounded-sm shadow-md"></div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="text-white font-medium">{pack.title}</span>
              <span className="text-[#888888]">{String(activeImg + 1).padStart(2, '0')} / 10</span>
            </div>
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {MOCK_IMAGES.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={`relative w-16 md:w-20 h-12 md:h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImg === i ? 'border-white scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center mt-4 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-2 md:mb-3 text-white">{pack.title}</h1>
            <p className="text-xl md:text-2xl text-white font-light mb-6 md:mb-8">${pack.price.toFixed(2)}</p>
            
            <p className="text-[#aaa] text-sm leading-relaxed mb-6 md:mb-8">{pack.description}</p>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm">what you get:</h3>
              <ul className="text-xs md:text-sm text-[#888888] space-y-2 md:space-y-3">
                <li className="flex items-center gap-2 md:gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> 10 desktop wallpapers</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> 4K resolution</li>
                <li className="flex items-center gap-2 md:gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white"></span> optimized for all displays</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
              <CheckoutButton price={pack.price} title={pack.title} slug={slug} />
              <button className="w-full py-3 md:py-4 rounded-full border border-white/10 text-white font-medium text-xs md:text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                + add to a bundle
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 md:pt-6">
              <span className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-[#888888]"><ShieldCheck size={14} className="text-green-500"/> Secure Checkout</span>
              <span className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-[#888888]"><Zap size={14} className="text-yellow-500"/> Instant Delivery</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 md:mt-20 border-y border-white/10 py-3 md:py-4 overflow-hidden relative">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex whitespace-nowrap gap-6 md:gap-10 items-center">
            {[...RECENT_BUYERS, ...RECENT_BUYERS].map((text, i) => (
              <span key={i} className="text-xs md:text-sm text-[#888888] flex items-center gap-2">
                <ShoppingBag size={14} className="text-green-500" /> {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}