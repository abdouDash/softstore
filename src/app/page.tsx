"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import MusicPlayer from "@/components/MusicPlayer";
import { ShieldCheck, Zap, Star, Lock, CheckCircle2 } from "lucide-react";

const MOCK_PACKS = [
  { id: 1, slug: "hustle", title: "hustle", price: 7.00, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "delusional", title: "delusional", price: 8.00, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "abstract", title: "abstract", price: 7.00, image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 aurora-bg relative z-10">
      <MusicPlayer />
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center overflow-hidden">
        <div className="lightning-glow"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            LATEST DROP — BELIEVE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6 leading-none text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            screens,<br/>elevated.
          </h1>
          
          <p className="text-[#aaa] max-w-md mx-auto mb-8 text-lg">
            curated 4K wallpapers designed to transform your iPhone & desktop into something beautiful.
          </p>

          {/* Trust Badges in Hero */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#888888] mb-10">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-green-500"/> 100% Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Zap size={16} className="text-yellow-500"/> Instant Delivery</span>
            <span className="flex items-center gap-1.5"><Lock size={16} className="text-blue-500"/> Crypto Powered</span>
          </div>
          
          <Link href="#packs" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            browse collection →
          </Link>
        </motion.div>

        {/* Monitor Preview in Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 relative w-full max-w-4xl aspect-video bg-[#111] rounded-t-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(255,120,80,0.2)]"
        >
          <img src={MOCK_PACKS[0].image} alt="Hero" className="w-full h-full object-cover opacity-90" />
        </motion.div>
      </section>

      {/* Bundle Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-white flex items-center gap-2">
              build your own bundle <Star size={16} className="text-yellow-500 fill-yellow-500" />
            </h2>
            <p className="text-sm text-[#888888]">pick any packs you like and save up to 35%</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 text-white">3 packs <span className="text-[#888888]">$18</span></button>
            <button className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 text-white">5 packs <span className="text-[#888888]">$29</span></button>
            <button className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 text-white">10 packs <span className="text-[#888888]">$49</span></button>
            <button className="btn-glow px-6 py-2 rounded-full text-black font-semibold text-sm">start picking</button>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="packs" className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_PACKS.map((pack, i) => (
            <motion.div 
              key={pack.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/packs/${pack.slug}`}>
                <div className="relative aspect-[4/3] bg-[#111111]/60 backdrop-blur-sm rounded-3xl p-8 mb-4 flex flex-col items-center justify-center overflow-hidden border border-white/10 transition-colors hover:border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                  
                  {/* 3D Monitor Mockup */}
                  <div className="monitor-3d relative w-full max-w-[260px] flex flex-col items-center z-10">
                    <div className="bg-black rounded-lg p-1 border border-gray-600 shadow-2xl relative z-10 w-full">
                      <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-90" />
                    </div>
                    <div className="flex flex-col items-center relative z-0">
                      <div className="w-12 h-10 bg-gradient-to-b from-gray-400 to-gray-500"></div>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 rounded-sm shadow-md"></div>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {i === 0 && (
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Latest Drop
                      </div>
                    )}
                    <div className="bg-green-500/10 backdrop-blur-md border border-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 size={10} /> Best Seller
                    </div>
                  </div>
                </div>
                
                {/* Card Details with Stars */}
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-lg font-medium group-hover:text-white transition-colors flex items-center gap-2">
                      {pack.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-xs text-[#888888] ml-1">(124)</span>
                    </div>
                    <p className="text-sm text-[#888888] mt-1">10 wallpapers</p>
                  </div>
                  <p className="text-sm text-white font-medium bg-white/5 px-2 py-1 rounded-md">${pack.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}