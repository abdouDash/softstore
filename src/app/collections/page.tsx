"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Star, Grid, Moon, Droplets, Flame, ShoppingBag } from "lucide-react";

const ALL_PACKS = [
  { id: 1, slug: "draculas-castle", title: "Dracula's Castle", price: 12.00, mood: "gothic", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "blood-ritual", title: "Blood Ritual", price: 10.00, mood: "blood", image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gothic-mist", title: "Gothic Mist", price: 15.00, mood: "gothic", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "crimson-night", title: "Crimson Night", price: 9.00, mood: "cyber", image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, slug: "dark-romance", title: "Dark Romance", price: 11.00, mood: "gothic", image: "https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=800&auto=format&fit=crop" },
  { id: 6, slug: "vampire-eyes", title: "Vampire Eyes", price: 14.00, mood: "blood", image: "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=800&auto=format&fit=crop" },
  { id: 7, slug: "cemetery-fog", title: "Cemetery Fog", price: 13.00, mood: "gothic", image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=800&auto=format&fit=crop" },
  { id: 8, slug: "blood-moon-pack", title: "Blood Moon", price: 8.00, mood: "blood", image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=800&auto=format&fit=crop" },
  { id: 9, slug: "immortal-forest", title: "Immortal Forest", price: 16.00, mood: "cyber", image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=800&auto=format&fit=crop" },
];

const MOODS = [
  { id: "all", label: "All Collections", icon: Grid },
  { id: "gothic", label: "Gothic", icon: Moon },
  { id: "blood", label: "Blood & Gore", icon: Droplets },
  { id: "cyber", label: "Cyber-Vampire", icon: Flame },
];

function CollectionCard({ pack }: { pack: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="perspective-[1200px] w-full max-w-[340px] mx-auto" 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="relative flex flex-col h-full bg-[#0a0000]/60 backdrop-blur-md rounded-2xl overflow-hidden border border-red-900/20 group shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.3)] transition-shadow duration-300"
      >
        <Link href={`/packs/${pack.slug}`} className="flex flex-col h-full relative z-10 p-5">
          
          {/* 3D PC Setup inside Collection */}
          <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-end mb-4" style={{ transform: "translateZ(30px)" }}>
            <div className="absolute bottom-0 w-[110%] h-6 bg-gradient-to-t from-[#050000] via-[#111] to-[#222] rounded-t-xl shadow-[0_-5px_20px_rgba(0,0,0,0.8)] border-t border-gray-700/50"></div>
            <div className="relative w-[85%] aspect-video bg-black rounded-lg p-1.5 border-[3px] border-[#1a1a1a] shadow-[0_15px_30px_rgba(0,0,0,0.9)] z-20 group-hover:border-[#2a2a2a] transition-colors duration-500">
              <img src={pack.image} alt={pack.title} className="w-full h-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-red-500 blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center -mt-1">
              <div className="w-12 h-14 bg-gradient-to-b from-[#222] via-[#111] to-black border-x border-gray-700 rounded-t-sm"></div>
              <div className="w-32 h-2 bg-gradient-to-r from-[#111] via-[#333] to-[#111] rounded-sm shadow-[0_5px_10px_rgba(0,0,0,0.8)]"></div>
            </div>
            <div className="relative w-[90%] flex justify-between items-end z-30 px-4 -mt-1 mb-2">
              <div className="relative w-[65%] h-6 bg-[#0a0a0a] rounded-md border-t border-gray-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] p-1 flex flex-col justify-between overflow-hidden">
                 <div className="flex justify-between w-full px-1">
                   {[...Array(10)].map((_, i) => <div key={i} className="w-[6%] h-2 bg-[#1a1a1a] rounded-[1px] border-b border-gray-700"></div>)}
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative w-10 h-14 bg-[#0a0a0a] rounded-[40%_40%_50%_50%] border-t border-gray-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] flex flex-col items-center pt-2 overflow-hidden">
                 <div className="w-[1px] h-4 bg-gray-700"></div>
                 <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-gray-700 mt-1"></div>
                 <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 blur-[2px] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          <div className="text-center flex-grow flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-1">{pack.mood}</div>
              <h3 className="text-xl font-serif text-white group-hover:text-red-400 transition-colors">{pack.title}</h3>
            </div>
            <div className="mt-3 pt-3 border-t border-red-900/30 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">10 Wallpapers</span>
              <span className="text-lg font-bold text-white">${pack.price.toFixed(2)}</span>
            </div>
            <div className="mt-3 w-full overflow-hidden h-0 group-hover:h-10 transition-all duration-500 ease-in-out">
              <button className="w-full bg-red-800 text-white text-[10px] font-bold tracking-widest uppercase py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700">
                <ShoppingBag size={14} /> Buy Now
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function CollectionsPage() {
  const [activeMood, setActiveMood] = useState("all");
  const filteredPacks = activeMood === "all" ? ALL_PACKS : ALL_PACKS.filter(pack => pack.mood === activeMood);

  return (
    <div className="w-full min-h-screen pt-24 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      <div className="epic-lightning">
        <div className="lightning-flash"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white spooky-glow mb-4">Explore Collections</h1>
          <p className="text-[#888888] max-w-lg mx-auto">Find the perfect dark aesthetic for your screen. Filter by mood and dive into the abyss.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {MOODS.map((mood) => {
            const Icon = mood.icon;
            const isActive = activeMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setActiveMood(mood.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive ? "bg-red-900/40 border-red-500 text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "bg-black/40 border-white/10 text-[#888888] hover:border-red-500/50 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {mood.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence>
            {filteredPacks.map((pack) => (
              <CollectionCard key={pack.id} pack={pack} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}