"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-20 flex flex-col items-center mb-12">
          <div className="latest-badge mb-8">
            <div className="latest-badge-dot"></div>
            LATEST DROP — BELIEVE
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-medium tracking-tight text-white mb-6">
            screens,<br/>elevated.
          </h1>
          
          <div className="flex items-center gap-6 mt-4">
            <Link href="#collection" className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              browse collection <ArrowRight size={16} />
            </Link>
            <span className="text-sm text-[#888] hidden md:inline">screens, elevated.</span>
          </div>
        </motion.div>

        {/* Big iMac Monitor with Dynamic Glow */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="hero-glow-container w-full max-w-[900px] px-6 z-10" style={{ '--glow-color': 'rgba(255, 0, 0, 0.35)' } as React.CSSProperties}>
          
          {/* Massive Glow behind the screen matching the image color */}
          <div className="hero-glow"></div>

          <div className="relative w-full z-10">
            <div className="imac-frame">
              <div className="imac-screen">
                {/* Batman Red Image to match the user's screenshot */}
                <img src="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full aspect-[16/9] object-cover" />
              </div>
              <div className="imac-chin"><div className="imac-logo"></div></div>
            </div>
            <div className="imac-stand-neck"></div>
            <div className="imac-stand-base"></div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}