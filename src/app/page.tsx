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
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div className="perspective-[1200px]" onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative bg-gradient-to-b from-[#0a0000] to-[#050000] rounded-2xl p-5 border border-red-900/30 flex flex-col h-full explore-card group">
        <Link href={`/packs/${pack.slug}`} className="flex flex-col h-full">
          
          {/* 3D Gaming Setup Container */}
          <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-center mb-6" style={{ transform: "translateZ(30px)" }}>
            
            {/* Desk Shadow & Glow */}
            <div className="absolute bottom-4 w-4/5 h-8 bg-black rounded-[50%] blur-md"></div>
            <div className="absolute bottom-8 w-3/4 h-20 bg-red-600/20 blur-2xl rounded-full group-hover:bg-red-600/40 transition-all duration-500"></div>

            {/* Monitor */}
            <div className="relative w-[90%] aspect-video bg-black rounded-lg p-1.5 border-2 border-gray-800 shadow-2xl z-20 group-hover:border-red-900/50 transition-colors duration-500">
              <img src={pack.image} alt={pack.title} className="w-full h-full object-cover rounded opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded"></div>
              {/* RGB Monitor Light */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-red-500 blur-[2px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Monitor Stand */}
            <div className="relative z-10 flex flex-col items-center -mt-0.5">
              <div className="w-10 h-12 bg-gradient-to-b from-gray-700 via-gray-800 to-black border-x border-gray-600"></div>
              <div className="w-28 h-2 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-t-sm shadow-lg"></div>
            </div>

            {/* RGB Keyboard & Mouse on Desk */}
            <div className="relative w-[95%] flex justify-between items-end mt-1 z-30 px-2">
              {/* Keyboard */}
              <div className="w-[65%] h-6 bg-gray-900 rounded-md border-t border-gray-700 relative overflow-hidden flex flex-wrap gap-[2px] p-1 shadow-[0_0_15px_rgba(220,38,38,0.6)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.9)] transition-shadow">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-[8%] h-1.5 bg-gray-800 rounded-[1px] shadow-sm"></div>
                ))}
                <div className="absolute bottom-0 w-full h-[2px] bg-red-500 blur-[1px] opacity-70"></div>
              </div>
              {/* Mouse */}
              <div className="w-8 h-10 bg-gray-900 rounded-full border-t border-gray-700 shadow-[0_0_15px_rgba(220,38,38,0.6)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.9)] transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-red-500 blur-[1px] opacity-70"></div>
              </div>
            </div>
            
            {/* Rating Badge */}
            <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1 border border-red-500/30 z-40">
              <Star size={10} className="text-red-500 fill-red-500" /> 4.9
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