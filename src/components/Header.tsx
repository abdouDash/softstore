"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full bg-[#050000]/80 backdrop-blur-xl fixed top-0 z-50 border-b border-red-900/20"
    >
      <style>{`
        @keyframes colorShift {
          0% { color: #ff0000; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000; transform: rotate(0deg) scale(1); }
          33% { color: #ff7e5f; text-shadow: 0 0 10px #ff7e5f, 0 0 20px #ff7e5f; transform: rotate(5deg) scale(1.1); }
          66% { color: #8b0000; text-shadow: 0 0 10px #8b0000, 0 0 20px #8b0000; transform: rotate(-5deg) scale(1.1); }
          100% { color: #ff0000; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000; transform: rotate(0deg) scale(1); }
        }
        .animated-a {
          animation: colorShift 4s infinite linear;
          display: inline-block;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Animated A Logo and Ornate Abdou Text */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-900 to-black border border-red-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.4)]">
            <span className="animated-a text-2xl font-black text-white">A</span>
          </div>
          <span className="text-xl md:text-2xl font-serif italic text-white tracking-widest drop-shadow-md group-hover:text-red-400 transition-colors">
            Abdou
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#888888] font-medium">
          <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
          <Link href="/collections" className="hover:text-red-500 transition-colors">Collections</Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/collections" className="bg-red-700 hover:bg-red-600 text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            Get Access
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0000] border-b border-red-900/30 absolute w-full left-0 top-20 flex flex-col p-6 gap-4 text-center">
          <Link href="/" className="text-white tracking-widest uppercase text-sm">Home</Link>
          <Link href="/collections" className="text-white tracking-widest uppercase text-sm">Collections</Link>
          <Link href="/contact" className="text-white tracking-widest uppercase text-sm">Contact Us</Link>
        </div>
      )}
    </motion.header>
  );
}