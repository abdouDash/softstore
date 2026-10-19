"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PACKS = [
  { id: 1, slug: "old-money-cars", title: "luxury cars", price: 12.00, image: "https://images.unsplash.com/photo-1549396535-c11d5c69b9c2?q=80&w=800&auto=format&fit=crop", tag: "LATEST DROP" },
  { id: 2, slug: "timepieces", title: "timepieces", price: 15.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gentleman-suit", title: "the suit", price: 10.00, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "luxury-yacht", title: "the yacht", price: 18.00, image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop" },
  { id: 5, slug: "vintage-whiskey", title: "whiskey & cigars", price: 9.00, image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop" },
  { id: 6, slug: "mansion", title: "the estate", price: 20.00, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: 7, slug: "classic-art", title: "classic art", price: 8.00, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
  { id: 8, slug: "old-money-books", title: "the library", price: 11.00, image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" },
  { id: 9, slug: "golf", title: "the club", price: 14.00, image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Hero Section (Softpxl Style) */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="hero-glow"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center">
          <div className="latest-badge mb-8">LATEST DROP — OLD MONEY</div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-none text-white mb-6">
            screens,<br/>elevated.
          </h1>
          <p className="text-[#888] max-w-md mx-auto mb-10 text-lg font-light">
            curated 4K wallpapers designed to transform your desktop into something beautiful.
          </p>
          <Link href="#collection" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            browse collection <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Bundle Banner */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">build your own bundle</h3>
            <p className="text-sm text-[#888888]">pick any packs you like and save up to 35%</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              3 packs <span className="text-[#888]">$18</span>
            </button>
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              5 packs <span className="text-[#888]">$29</span>
            </button>
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              10 packs <span className="text-[#888]">$49</span>
            </button>
            <button className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors ml-2">
              start picking
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-16 overflow-x-auto pb-4">
          {["all 81", "old money 24", "luxury 16", "cars 8", "art 13", "watch 7"].map((item, i) => (
            <button key={i} className={`text-sm whitespace-nowrap pb-2 ${i === 0 ? 'text-white border-b-2 border-white' : 'text-[#888] hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Grid (3 columns, 9 items) */}
        <div id="collection" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {PACKS.map((pack) => (
            <div key={pack.id} className="group cursor-pointer flex flex-col">
              <Link href={`/packs/${pack.slug}`}>
                
                {/* Card with Colorful Hover Glow */}
                <div className="bg-[#181818] border border-white/5 rounded-2xl p-8 flex items-center justify-center aspect-[4/3] relative overflow-hidden mb-4 card-hover-glow">
                  
                  {pack.tag && (
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider z-20">
                      {pack.tag}
                    </div>
                  )}

                  {/* 3D iMac Monitor */}
                  <div className="relative w-full max-w-[220px] transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="bg-black rounded-lg p-1.5 border-[2px] border-gray-600 shadow-2xl relative z-10">
                      <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="relative flex flex-col items-center -mt-0.5 z-0">
                      <div className="w-14 h-10 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm"></div>
                      <div className="w-28 h-2 bg-gray-400 rounded-t-sm shadow-md"></div>
                    </div>
                  </div>
                </div>
                
                {/* Text Below */}
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-red-400 transition-colors">{pack.title}</h3>
                    <p className="text-sm text-[#888]">10 wallpapers</p>
                  </div>
                  <p className="text-sm text-white">${pack.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}