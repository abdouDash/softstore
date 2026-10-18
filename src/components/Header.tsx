"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Skull } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header 
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full bg-[#050000]/80 backdrop-blur-xl fixed top-0 z-50 border-b border-red-900/20"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Clean Logo: Skull + AbdouPxl */}
        <Link href="/" className="group flex items-center gap-3">
          <Skull className="w-7 h-7 text-red-600 animate-pulse" />
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.5)] group-hover:text-red-500 transition-colors">
            AbdouPxl
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#888888] font-medium">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/collections" className="hover:text-red-500 transition-colors">Collections</Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/collections" className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.8)]">
            Get Access
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0000] border-b border-red-900/30 absolute w-full left-0 top-20 flex flex-col p-6 gap-4 text-center">
          <Link href="/" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Home</Link>
          <Link href="/collections" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Collections</Link>
          <Link href="/contact" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Contact Us</Link>
        </div>
      )}
    </motion.header>
  );
}