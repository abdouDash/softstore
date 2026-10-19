"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const PACKS = [
  { id: 1, slug: "luxury-cars", title: "luxury cars", price: 12.00, image: "https://images.unsplash.com/photo-1549396535-c11d5c69b9c2?q=80&w=800&auto=format&fit=crop", tag: "LATEST DROP", glow: "#ef4444", shadow: "rgba(239, 68, 68, 0.4)" },
  { id: 2, slug: "timepieces", title: "timepieces", price: 15.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", tag: "EXCLUSIVE", glow: "#f59e0b", shadow: "rgba(245, 158, 11, 0.4)" },
  { id: 3, slug: "whiskey-cigars", title: "whiskey & cigars", price: 9.00, image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop", glow: "#f97316", shadow: "rgba(249, 115, 22, 0.4)" },
  { id: 4, slug: "the-suit", title: "the suit", price: 10.00, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop", glow: "#3b82f6", shadow: "rgba(59, 130, 246, 0.4)" },
];

function PackCard({ pack }: { pack: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div 
      className="perspective-[1200px] w-full group cursor-pointer" 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ '--glow-color': pack.glow, '--glow-shadow': pack.shadow } as React.CSSProperties}
    >
      <Link href={`/packs/${pack.slug}`}>
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
          className="flex flex-col"
        >
          {/* Tall Vertical Glass Card */}
          <div className="glass-card-vertical p-8 flex flex-col items-center justify-center aspect-[3/4] mb-4">
            
            {/* Badge */}
            {pack.tag && (
              <div className={`absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                pack.tag === 'EXCLUSIVE' 
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
                  : 'bg-white/10 text-white border border-white/20'
              }`}>
                {pack.tag}
              </div>
            )}

            {/* 3D iMac Mockup */}
            <div className="relative w-full max-w-[260px]">
              <div className="imac-screen p-1 relative z-10">
                <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="relative flex flex-col items-center -mt-1 z-0">
                <div className="imac-stand w-20 h-16 rounded-b-sm"></div>
                <div className="imac-base w-32 h-2.5 rounded-t-sm"></div>
              </div>
            </div>

            {/* Slider Dots (Animated) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="slider-dot w-8 active"></motion.div>
              <div className="slider-dot w-4"></div>
              <div className="slider-dot w-4"></div>
            </div>
          </div>

          {/* Text Below Card */}
          <div className="flex justify-between items-center px-2" style={{ transform: "translateZ(20px)" }}>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[var(--glow-color)] transition-colors mb-1">{pack.title}</h3>
              <p className="text-sm text-[#888]">10 wallpapers <span className="mx-1">•</span> ${pack.price.toFixed(2)}</p>
            </div>
            <div className="w-8 h-8 rounded-full glass-pill flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-32 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Hero Minimal */}
        <section className="text-center mb-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif text-white mb-6">
            screens,<br/>elevated.
          </motion.h1>
          <p className="text-[#888] max-w-md mx-auto mb-10 text-lg font-light">
            curated 4K wallpapers designed to transform your desktop into something beautiful.
          </p>
        </section>

        {/* Filters */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-16 overflow-x-auto pb-4">
          {["all 81", "old money 24", "luxury 16", "cars 8"].map((item, i) => (
            <button key={i} className={`text-sm whitespace-nowrap pb-2 ${i === 0 ? 'text-white border-b-2 border-white' : 'text-[#888] hover:text-white transition-colors'}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Grid (Taller Cards) */}
        <div id="collection" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {PACKS.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>

      </div>
    </div>
  );
}