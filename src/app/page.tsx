"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Zap, Lock, Star, ArrowRight, ShoppingBag } from "lucide-react";

const PACKS = [
  { id: 1, slug: "draculas-castle", title: "Dracula's Castle", price: 12.00, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "blood-ritual", title: "Blood Ritual", price: 10.00, image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gothic-mist", title: "Gothic Mist", price: 15.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "crimson-night", title: "Crimson Night", price: 9.00, image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, slug: "dark-romance", title: "Dark Romance", price: 11.00, image: "https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=800&auto=format&fit=crop" },
  { id: 6, slug: "vampire-eyes", title: "Vampire Eyes", price: 14.00, image: "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=800&auto=format&fit=crop" },
  { id: 7, slug: "cemetery-fog", title: "Cemetery Fog", price: 13.00, image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=800&auto=format&fit=crop" },
  { id: 8, slug: "blood-moon-pack", title: "Blood Moon", price: 8.00, image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop" },
  { id: 9, slug: "immortal-forest", title: "Immortal Forest", price: 16.00, image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=800&auto=format&fit=crop" },
];

function PackCard({ pack }: { pack: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div className="perspective-[1200px]" onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative bg-gradient-to-b from-[#0a0000] to-[#050000] rounded-2xl p-6 border border-red-900/30 flex flex-col h-full explore-card group overflow-hidden">
        
        {/* Red Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/30 transition-all duration-700"></div>

        <Link href={`/packs/${pack.slug}`} className="flex flex-col h-full relative z-10">
          
          {/* 3D Gaming Setup Container */}
          <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-end mb-6" style={{ transform: "translateZ(40px)" }}>
            
            {/* Desk Surface */}
            <div className="absolute bottom-0 w-[110%] h-8 bg-gradient-to-t from-[#050000] via-[#111] to-[#222] rounded-t-xl shadow-[0_-5px_20px_rgba(0,0,0,0.8)] border-t border-gray-700/50"></div>

            {/* Monitor Setup */}
            <div className="relative w-[85%] aspect-video bg-black rounded-lg p-1.5 border-[3px] border-[#1a1a1a] shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-20 group-hover:border-[#2a2a2a] transition-colors duration-500">
              <img src={pack.image} alt={pack.title} className="w-full h-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
              
              {/* Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-md"></div>
              
              {/* RGB Under-glow */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-red-500 blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Monitor Stand */}
            <div className="relative z-10 flex flex-col items-center -mt-1">
              <div className="w-12 h-14 bg-gradient-to-b from-[#222] via-[#111] to-black border-x border-gray-700 rounded-t-sm"></div>
              <div className="w-32 h-2 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-sm shadow-[0_5px_10px_rgba(0,0,0,0.8)]"></div>
            </div>

            {/* Keyboard & Mouse (RGB) */}
            <div className="relative w-[90%] flex justify-between items-end z-30 px-4 -mt-1 mb-2">
              
              {/* Keyboard */}
              <div className="relative w-[65%] h-7 bg-[#0a0a0a] rounded-md border-t border-gray-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] p-1 flex flex-col justify-between overflow-hidden">
                 {/* Keys */}
                 <div className="flex justify-between w-full px-1">
                   {[...Array(12)].map((_, i) => <div key={i} className="w-[6%] h-2 bg-[#1a1a1a] rounded-[1px] border-b border-gray-700"></div>)}
                 </div>
                 <div className="flex justify-between w-full px-2">
                   {[...Array(10)].map((_, i) => <div key={i} className="w-[7%] h-2 bg-[#1a1a1a] rounded-[1px] border-b border-gray-700"></div>)}
                 </div>
                 {/* Keyboard RGB Glow */}
                 <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Mouse */}
              <div className="relative w-10 h-14 bg-[#0a0a0a] rounded-[40%_40%_50%_50%] border-t border-gray-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] flex flex-col items-center pt-2 overflow-hidden">
                 <div className="w-[1px] h-4 bg-gray-700"></div>
                 <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-gray-700 mt-1"></div>
                 {/* Mouse RGB Glow */}
                 <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </div>

            </div>
            
            {/* Rating Badge */}
            <div className="absolute top-0 right-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white flex items-center gap-1 border border-red-500/30 z-40">
              <Star size={12} className="text-red-500 fill-red-500" /> 4.9
            </div>
          </div>
          
          {/* Details */}
          <div className="text-center flex-grow flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-2">Premium Pack</div>
              <h3 className="text-2xl font-serif text-white group-hover:text-red-400 transition-colors">{pack.title}</h3>
            </div>
            <div className="mt-4 pt-4 border-t border-red-900/20 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">10 Wallpapers</span>
              <span className="text-xl font-bold text-white">${pack.price.toFixed(2)}</span>
            </div>
            <div className="mt-4 w-full overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-in-out">
              <button className="w-full bg-red-800 text-white text-xs font-bold tracking-widest uppercase py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <ShoppingBag size={16} /> Buy Now
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      <div className="blood-moon"></div>

      <div className="lightning-container">
        <div className="lightning"></div>
        <div className="lightning"></div>
        <div className="lightning"></div>
        <div className="lightning"></div>
      </div>

      <motion.div className="absolute text-4xl text-red-700/50 z-0" style={{ top: '20%', left: '5%' }} animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }}>🦇</motion.div>
      <motion.div className="absolute text-6xl text-red-900/40 z-0" style={{ top: '60%', right: '5%' }} animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }}>🩸</motion.div>

      <section className="relative max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-16 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="z-10 flex flex-col items-center w-full">
          <div className="border border-red-500/30 bg-red-900/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 text-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
            The High End Storefront Kit — Abdou Edition
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none text-white spooky-glow mb-8 max-w-5xl mx-auto">
            Launch Your Brand With <span className="text-red-600">Abdou</span>
          </h1>
          
          <p className="text-[#aaa] max-w-2xl mx-auto mb-10 text-sm md:text-lg font-light">
            Exclusive Themes, Premium Liquid Sections, and Lifetime Priority Support. Build your Digital Identity and launch your dark brand today.
          </p>

          <div className="flex items-center gap-6 md:gap-12 mb-12 border-y border-red-900/30 py-4 w-full max-w-3xl justify-center bg-black/20 rounded-2xl backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">4.8/5</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Rating</span>
            </div>
            <div className="w-px h-10 bg-red-900/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">34%</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Conversion</span>
            </div>
            <div className="w-px h-10 bg-red-900/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24h</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Support</span>
            </div>
          </div>

          <Link href="#packs" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center gap-2 hover:scale-105">
            Explore Packs <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section id="packs" className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 spooky-glow">Explore Collection</h2>
            <p className="text-[#888888] max-w-xl text-sm md:text-base">Curated 4K vampire aesthetic packs. Hover over a pack to feel the 3D depth.</p>
          </div>
          <Link href="/collections" className="text-xs font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors flex items-center gap-2 border border-red-500/30 px-6 py-3 rounded-full hover:bg-red-500/10">
            View All Collections <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PACKS.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      <section className="border-t border-red-900/30 py-12 relative z-10 bg-black/50 mt-12">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-[#888]">
          <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-red-500"/> Secure Checkout</span>
          <span className="flex items-center gap-2"><Zap size={18} className="text-red-500"/> Instant Delivery</span>
          <span className="flex items-center gap-2"><Lock size={18} className="text-red-500"/> Premium Support</span>
        </div>
      </section>

    </div>
  );
}