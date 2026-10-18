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
  
  // Smooth spring animation for 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="group cursor-pointer w-full perspective-[1000px]"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative bg-gradient-to-b from-[#0a0000] to-[#050000] rounded-2xl p-5 border border-red-900/30 hover:border-red-500/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)] transition-all duration-300 flex flex-col items-center h-full"
      >
        <Link href={`/packs/${pack.slug}`} className="w-full flex flex-col items-center" style={{ transform: "translateZ(40px)" }}>
          
          {/* Monitor Image Container */}
          <div className="relative w-full aspect-video bg-[#020000] rounded-xl p-2 border border-red-900/20 mb-6 overflow-hidden">
            <img src={pack.image} alt={pack.title} className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Blood reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Rating Badge inside image */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white flex items-center gap-1 border border-red-500/20">
              <Star size={10} className="text-red-500 fill-red-500" /> 4.9
            </div>
          </div>
          
          {/* Details */}
          <div className="w-full text-center flex-grow flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-2">Premium 4K Pack</div>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-red-400 transition-colors">{pack.title}</h3>
            </div>
            
            <div className="mt-4 pt-4 border-t border-red-900/20 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">10 Wallpapers</span>
              <span className="text-xl font-bold text-white">${pack.price.toFixed(2)}</span>
            </div>
            
            {/* Sliding Button */}
            <div className="mt-4 w-full overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-in-out">
              <button className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white text-xs font-bold tracking-widest uppercase py-3 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
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

      {/* Hero Section */}
      <section className="relative max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-16 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center w-full">
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

      {/* 3D Grid Section */}
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

      {/* Footer Trust */}
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