"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Zap, ArrowRight, Star } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

const PACKS = [
  { id: 1, slug: "draculas-castle", title: "Dracula's Castle", price: 12.00, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "blood-ritual", title: "Blood Ritual", price: 10.00, image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gothic-mist", title: "Gothic Mist", price: 15.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "crimson-night", title: "Crimson Night", price: 9.00, image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
];

function PackCard({ pack }: { pack: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div 
      className="perspective-1000 w-full" 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div 
        style={{ rotateX, rotateY }} 
        className="card-3d relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 group"
      >
        <Link href={`/packs/${pack.slug}`} className="flex flex-col h-full">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img src={pack.image} alt={pack.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
              <Star size={12} className="text-red-500 fill-red-500" /> 4.9
            </div>
          </div>
          <div className="p-6 card-text">
            <h3 className="text-xl font-serif text-white mb-1">{pack.title}</h3>
            <p className="text-sm text-[#888] mb-4">10 Wallpapers</p>
            <div className="flex items-center justify-between">
              <span className="text-white font-bold">${pack.price.toFixed(2)}</span>
              <span className="text-red-500 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Pack <ArrowRight size={14} />
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
    <div className="w-full min-h-screen pt-20 bg-[#0a0a0a] relative overflow-hidden">
      <CustomCursor />
      
      {/* Hero Section - Softpxl Style */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <div className="hero-glow"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center"
        >
          <div className="latest-badge mb-6">
            LATEST DROP — BELIEVE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-none text-white mb-6">
            screens,<br/>elevated.
          </h1>
          
          <p className="text-[#888] max-w-md mx-auto mb-10 text-lg">
            curated 4K wallpapers designed to transform your desktop into something beautiful.
          </p>
          
          <Link href="#collection" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            browse collection <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif text-white">mac collection</h2>
          <Link href="/collections" className="text-sm text-[#888] hover:text-white transition-colors">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PACKS.slice(0, 4).map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-white/5 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 text-sm text-[#888]">
          <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-red-500"/> Secure Checkout</span>
          <span className="flex items-center gap-2"><Zap size={18} className="text-red-500"/> Instant Delivery</span>
        </div>
      </section>
    </div>
  );
}