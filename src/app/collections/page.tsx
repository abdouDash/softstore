"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Filter, Grid, Moon, Droplets, Flame } from "lucide-react";

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

export default function CollectionsPage() {
  const [activeMood, setActiveMood] = useState("all");

  const filteredPacks = activeMood === "all" 
    ? ALL_PACKS 
    : ALL_PACKS.filter(pack => pack.mood === activeMood);

  return (
    <div className="w-full min-h-screen pt-24 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white spooky-glow mb-4">Explore Collections</h1>
          <p className="text-[#888888] max-w-lg mx-auto">Find the perfect dark aesthetic for your screen. Filter by mood and dive into the abyss.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {MOODS.map((mood) => {
            const Icon = mood.icon;
            const isActive = activeMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setActiveMood(mood.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  isActive 
                    ? "bg-red-900/40 border-red-500 text-red-400 shadow-[0_0_20px_rgba(220,38,38,0.4)]" 
                    : "bg-black/40 border-white/10 text-[#888888] hover:border-red-500/50 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {mood.label}
              </button>
            );
          })}
        </div>

        {/* Grid Section */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
          <AnimatePresence>
            {filteredPacks.map((pack) => (
              <motion.div 
                layout
                key={pack.id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }} 
                className="group cursor-pointer flex flex-col items-center"
              >
                <Link href={`/packs/${pack.slug}`} className="w-full">
                  <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center z-10">
                    <div className="bg-black rounded-xl p-2 relative z-10 w-full monitor-3d-vampire overflow-hidden">
                      <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 to-transparent pointer-events-none"></div>
                    </div>
                    <div className="flex flex-col items-center relative z-0 -mt-1">
                      <div className="w-16 h-12 bg-gradient-to-b from-gray-800 to-black"></div>
                      <div className="w-32 h-2 bg-gradient-to-r from-black via-gray-800 to-black rounded-sm shadow-md"></div>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">{pack.mood}</div>
                    <h3 className="text-xl font-serif text-white group-hover:text-red-500 transition-colors">{pack.title}</h3>
                    <div className="flex justify-center items-center gap-1 mt-2">
                      {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-red-500 fill-red-500" />)}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">10 Wallpapers • ${pack.price.toFixed(2)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}