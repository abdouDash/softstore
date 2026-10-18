"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
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
  
  // Soft, buttery smooth springs
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25, mass: 0.5 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div className="perspective-[1200px] w-full max-w-[320px] mx-auto" onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}>
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="relative flex flex-col h-full bg-[#0a0000]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-red-900/20 group shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
      >
        <Link href={`/packs/${pack.slug}`} className="flex flex-col h-full relative z-10">
          
          <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ transform: "translateZ(30px)" }}>
            <img src={pack.image} alt={pack.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0000] via-[#0a0000]/20 to-transparent"></div>
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 border border-red-500/30">
              <Star size={10} className="text-red-500 fill-red-500" /> 4.9
            </div>
          </div>
          
          <div className="p-4 -mt-8 relative z-20 text-center flex-grow flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
            <div>
              <div className="text-[9px] font-bold tracking-widest text-red-500 uppercase mb-1">Premium Pack</div>
              <h3 className="text-xl font-serif text-white group-hover:text-red-400 transition-colors drop-shadow-md">{pack.title}</h3>
            </div>
            <div className="mt-3 pt-3 border-t border-red-900/30 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-medium">10 Wallpapers</span>
              <span className="text-lg font-bold text-white">${pack.price.toFixed(2)}</span>
            </div>
            <div className="mt-3 w-full overflow-hidden h-0 group-hover:h-10 transition-all duration-500 ease-in-out">
              <button className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white text-[10px] font-bold tracking-widest uppercase py-2.5 rounded-lg flex items-center justify-center gap-2">
                <ShoppingBag size={14} /> Buy Now
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="w-full min-h-screen pt-20 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      <div className="blood-moon"></div>

      {/* Realistic Lightning */}
      <div className="epic-lightning">
        <div className="lightning-flash"></div>
        <svg className="bolt-svg" viewBox="0 0 100 300" preserveAspectRatio="none">
          <path d="M50 0 L60 80 L40 120 L70 200 L30 300 L50 180 L30 130 L50 80 Z" />
        </svg>
        <svg className="bolt-svg" viewBox="0 0 100 300" preserveAspectRatio="none">
          <path d="M40 0 L60 100 L20 150 L50 220 L10 300 L40 200 L20 140 L50 80 Z" />
        </svg>
      </div>

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