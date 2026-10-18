"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import MusicPlayer from "@/components/MusicPlayer";
import { ShieldCheck, Zap, Star, Lock, Ghost, Skull } from "lucide-react";

const HALLOWEEN_PACKS = [
  { id: 1, slug: "haunted-castle", title: "Haunted Castle", price: 12.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "pumpkin-night", title: "Pumpkin Night", price: 10.00, image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "dark-forest", title: "Dark Forest", price: 15.00, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-16 md:pt-20 halloween-bg relative z-10 overflow-hidden">
      <MusicPlayer />
      
      {/* Background Elements */}
      <div className="fog"></div>
      <div className="realistic-moon"></div>

      {/* Floating Spooky Elements (Bats & Pumpkins) */}
      <motion.div className="floating-element text-4xl" style={{ top: '15%', left: '10%' }} animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>🦇</motion.div>
      <motion.div className="floating-element text-3xl" style={{ top: '25%', right: '20%' }} animate={{ y: [0, -30, 0], x: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>🦇</motion.div>
      <motion.div className="floating-element text-5xl" style={{ bottom: '20%', left: '5%' }} animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>🎃</motion.div>
      <motion.div className="floating-element text-4xl" style={{ bottom: '30%', right: '8%' }} animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>🕸️</motion.div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28 flex flex-col items-center text-center z-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center">
          <div className="border border-orange-500/30 bg-orange-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6 md:mb-8 flex items-center gap-2 text-orange-400">
            <Ghost size={14} className="animate-bounce" />
            SPOOKY SEASON DROP — 4K ONLY
          </div>
          
          {/* Haunted Title with Spider */}
          <div className="relative inline-block mb-4 md:mb-6">
            <div className="spider-container">
              <div className="spider-web"></div>
              <motion.div 
                className="spider-body" 
                animate={{ rotate: [0, 5, -5, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🕷️
              </motion.div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter leading-none text-white spooky-glow">
              Haunted
            </h1>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tighter mb-4 md:mb-6 leading-none text-white">
            Screens.
          </h1>
          
          <p className="text-[#aaa] max-w-md mx-auto mb-8 md:mb-10 text-base md:text-lg px-4">
            Transform your desktop into a dark masterpiece with our curated 4K Halloween collection.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs md:text-sm text-[#888888] mb-8 md:mb-12">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500"/> Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-500"/> Instant Delivery</span>
            <span className="flex items-center gap-1.5"><Lock size={14} className="text-orange-500"/> Crypto Powered</span>
          </div>
          
          <Link href="#packs" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center gap-2">
            <Skull size={18} /> Browse Collection
          </Link>
        </motion.div>
      </section>

      {/* 3D Floating Screens Section */}
      <section id="packs" className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
          {HALLOWEEN_PACKS.map((pack, i) => (
            <motion.div 
              key={pack.id} 
              initial={{ opacity: 0, y: 100 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: i * 0.2 }} 
              className="group cursor-pointer flex flex-col items-center"
            >
              <Link href={`/packs/${pack.slug}`} className="w-full">
                <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center z-10">
                  {/* Monitor Screen */}
                  <div className="bg-black rounded-xl p-2 border border-gray-800 shadow-2xl relative z-10 w-full monitor-3d-halloween overflow-hidden">
                    <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  {/* Monitor Stand */}
                  <div className="flex flex-col items-center relative z-0 -mt-1">
                    <div className="w-16 h-12 bg-gradient-to-b from-gray-600 to-gray-800"></div>
                    <div className="w-32 h-2 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-sm shadow-md"></div>
                  </div>
                </div>
                
                {/* Details */}
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-serif text-white group-hover:text-orange-400 transition-colors">{pack.title}</h3>
                  <div className="flex justify-center items-center gap-1 mt-2">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-orange-500 fill-orange-500" />)}
                  </div>
                  <p className="text-sm text-gray-400 mt-2">10 Wallpapers • ${pack.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}