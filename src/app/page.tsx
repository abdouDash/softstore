"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

const PACKS = [
  { id: 1, slug: "draculas-castle", title: "hustle", price: 7.00, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", tag: "LATEST DROP" },
  { id: 2, slug: "blood-ritual", title: "delusional", price: 8.00, image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gothic-mist", title: "abstract", price: 7.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "crimson-night", title: "authenticity", price: 9.00, image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, slug: "dark-romance", title: "dynasty", price: 11.00, image: "https://images.unsplash.com/photo-1478719059408-592965723cbc?q=80&w=800&auto=format&fit=crop" },
  { id: 6, slug: "vampire-eyes", title: "mindset", price: 14.00, image: "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#0a0a0a] relative overflow-hidden">
      <CustomCursor />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
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
          {["all 81", "mindset 16", "luxury 24", "cars 8", "cinema 13", "icons 7", "art 13"].map((item, i) => (
            <button key={i} className={`text-sm whitespace-nowrap pb-2 ${i === 0 ? 'text-white border-b-2 border-white' : 'text-[#888] hover:text-white'}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PACKS.map((pack) => (
            <div key={pack.id} className="group cursor-pointer flex flex-col">
              <Link href={`/packs/${pack.slug}`}>
                {/* 3D Monitor Card */}
                <div className="bg-[#181818] rounded-2xl p-8 flex items-center justify-center aspect-[4/3] relative overflow-hidden mb-4 group-hover:bg-[#1f1f1f] transition-colors duration-300">
                  
                  {pack.tag && (
                    <div className="absolute top-4 left-4 bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider z-20">
                      {pack.tag}
                    </div>
                  )}

                  {/* Monitor Mockup */}
                  <div className="relative w-full max-w-[220px] transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    {/* Screen */}
                    <div className="bg-black rounded-lg p-1.5 border-[2px] border-gray-600 shadow-2xl relative z-10">
                      <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md opacity-90 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Stand (iMac Style) */}
                    <div className="relative flex flex-col items-center -mt-0.5 z-0">
                      <div className="w-14 h-10 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm"></div>
                      <div className="w-28 h-2 bg-gray-400 rounded-t-sm shadow-md"></div>
                    </div>
                  </div>
                </div>
                
                {/* Text Below Card */}
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