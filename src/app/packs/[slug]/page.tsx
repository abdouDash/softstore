"use client";
import Link from "next/link";
import { ShieldCheck, Zap, Star, Check, Users, ShoppingBag, Ghost } from "lucide-react";
import CheckoutButton from "./CheckoutButton";
import { useState, use } from "react";
import { motion } from "framer-motion";

const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=1000&auto=format&fit=crop",
];

const RECENT_BUYERS = [
  "Alex from US just bought this", "Sarah from UK just bought this",
  "Mohamed from UAE just bought this", "Yuki from JP just bought this",
  "Lucas from BR just bought this", "Emma from FR just bought this"
];

const REVIEWS = [
  { name: "David K.", text: "Insane quality. My setup looks spooky now!", stars: 5 },
  { name: "Sofia M.", text: "Instant delivery with crypto. Very smooth.", stars: 5 },
  { name: "Ali R.", text: "Best Halloween pack I've bought. Highly recommend.", stars: 5 }
];

export default function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [activeImg, setActiveImg] = useState(0);
  
  const pack = {
    title: slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
    price: 12.00,
    description: "10 premium 4K Halloween wallpapers featuring haunted castles, glowing pumpkins, dark forests, and spooky aesthetics. Transform your desktop into a dark masterpiece.",
  };

  return (
    <div className="w-full min-h-screen pt-24 bg-[#0a0212] relative overflow-hidden font-sans halloween-bg">
      <div className="fog"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <Link href="/" className="text-sm text-[#888888] hover:text-orange-400 mb-8 inline-flex items-center gap-2 transition-colors">
          ← Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Images */}
          <div className="flex flex-col gap-6">
            <motion.div 
              key={activeImg}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/3] bg-[#110511] rounded-3xl p-8 flex items-center justify-center overflow-hidden border border-orange-500/20 shadow-[0_0_50px_rgba(255,120,80,0.15)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-purple-500/10 blur-3xl"></div>
              <div className="relative w-full max-w-[400px] flex flex-col items-center z-10 transition-transform duration-700 group-hover:scale-105">
                <div className="bg-black rounded-xl p-2 border border-gray-800 shadow-2xl w-full">
                  <img src={MOCK_IMAGES[activeImg]} alt="Wallpaper" className="w-full aspect-video object-cover rounded-lg opacity-90" />
                </div>
                <div className="flex flex-col items-center relative z-0">
                  <div className="w-16 h-14 bg-gradient-to-b from-gray-700 to-gray-900"></div>
                  <div className="w-32 h-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-sm shadow-md"></div>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-white font-medium">{pack.title}</span>
              <span className="text-sm text-orange-400">{String(activeImg + 1).padStart(2, '0')} / 10</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {MOCK_IMAGES.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${activeImg === i ? 'border-orange-500 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-3 text-white spooky-glow">{pack.title}</h1>
            <p className="text-2xl text-orange-400 font-light mb-8">${pack.price.toFixed(2)}</p>
            
            <p className="text-[#aaa] text-sm leading-relaxed mb-8">{pack.description}</p>
            
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4 text-sm">what you get:</h3>
              <ul className="text-sm text-[#888888] space-y-3">
                <li className="flex items-center gap-3"><Ghost size={14} className="text-orange-500"/> 10 Halloween 4K wallpapers</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> 4K resolution</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> optimized for all displays</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> instant download after purchase</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <CheckoutButton price={pack.price} title={pack.title} slug={slug} />
              <button className="w-full py-4 rounded-full border border-orange-500/30 text-orange-400 font-medium text-sm hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2">
                + add to a bundle · 3 packs for $25
              </button>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <span className="flex items-center gap-2 text-xs text-[#888888]"><ShieldCheck size={16} className="text-green-500"/> Secure Checkout</span>
              <span className="flex items-center gap-2 text-xs text-[#888888]"><Zap size={16} className="text-yellow-500"/> Instant Delivery</span>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-20 border-y border-orange-500/20 py-4 overflow-hidden relative bg-black/30">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 20 }} className="flex whitespace-nowrap gap-10 items-center">
            {[...RECENT_BUYERS, ...RECENT_BUYERS].map((text, i) => (
              <span key={i} className="text-sm text-[#888888] flex items-center gap-2">
                <ShoppingBag size={14} className="text-orange-500" /> {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Reviews */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-medium text-white flex items-center gap-2">Loved by creators <Users size={20} className="text-orange-500" /></h2>
            <div className="flex items-center gap-2 text-sm text-[#888888]"><Star size={16} className="text-orange-500 fill-orange-500" /> 4.9/5 (124 reviews)</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-[#110511] border border-orange-500/20 p-6 rounded-2xl">
                <div className="flex gap-1 mb-4">{[...Array(rev.stars)].map((_, j) => <Star key={j} size={14} className="text-orange-500 fill-orange-500" />)}</div>
                <p className="text-sm text-white mb-4">"{rev.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-700 flex items-center justify-center text-xs text-white font-bold">{rev.name[0]}</div>
                  <span className="text-xs text-[#888888]">{rev.name} <Check size={12} className="inline text-orange-500 ml-1"/> Verified Buyer</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}