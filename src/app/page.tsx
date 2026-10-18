"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Lock, Star, ArrowRight } from "lucide-react";

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
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      className="card-3d-wrapper group cursor-pointer w-full max-w-[360px] mx-auto"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div 
        style={{ rotateX, rotateY }}
        className="card-3d relative bg-[#0a0000] rounded-2xl p-4 border border-red-900/30 overflow-hidden h-full flex flex-col items-center"
      >
        <Link href={`/packs/${pack.slug}`} className="w-full flex flex-col items-center">
          
          {/* Monitor Image */}
          <div className="relative w-full aspect-video bg-black rounded-lg p-1.5 border border-gray-800 mb-6 overflow-hidden">
            <img src={pack.image} alt={pack.title} className="w-full h-full object-cover rounded opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Card Details */}
          <div className="w-full text-center card-content">
            <div className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-2">Premium Pack</div>
            <h3 className="text-xl font-serif text-white mb-2">{pack.title}</h3>
            <div className="flex justify-center items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-red-600 fill-red-600" />)}
            </div>
            <div className="flex items-center justify-between border-t border-red-900/20 pt-4 mt-2">
              <span className="text-sm text-gray-400">10 Wallpapers</span>
              <span className="text-lg font-bold text-white">${pack.price.toFixed(2)}</span>
            </div>
            
            {/* Hover Button */}
            <div className="mt-4 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
              <span className="inline-block w-full bg-red-700 text-white text-xs font-bold tracking-widest uppercase py-2 rounded-lg">
                View Pack
              </span>
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
      <section className="relative max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-20 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center w-full">
          <div className="border border-red-500/30 bg-red-900/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 text-red-500">
            The High End Storefront Kit — Abdou Edition
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none text-white spooky-glow mb-8 max-w-5xl mx-auto">
            Launch Your Brand With <span className="text-red-600">Abdou</span>
          </h1>
          
          <p className="text-[#aaa] max-w-2xl mx-auto mb-10 text-sm md:text-lg font-light">
            Exclusive Themes, Premium Liquid Sections, and Lifetime Priority Support. Build your Digital Identity and launch your dark brand today.
          </p>

          <div className="flex items-center gap-6 md:gap-12 mb-10 border-y border-red-900/30 py-4 w-full max-w-3xl justify-center">
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

          <Link href="#packs" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center gap-2">
            Explore Packs <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="marquee-container relative z-10">
        <div className="marquee-content flex gap-8 text-xl md:text-2xl font-bold uppercase tracking-widest">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span className="text-outline">ABDOU PACKS</span>
              <span className="text-red-600">•</span>
              <span className="text-white">4K WALLPAPERS</span>
              <span className="text-red-600">•</span>
              <span className="text-outline">HIGH QUALITY</span>
              <span className="text-red-600">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3D Grid Section */}
      <section id="packs" className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Explore Collection</h2>
            <p className="text-[#888888] max-w-xl">Curated 4K vampire aesthetic packs. Hover over a pack to feel the 3D depth.</p>
          </div>
          <Link href="/collections" className="text-sm font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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