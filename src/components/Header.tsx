"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Skull } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#050000]/90 backdrop-blur-xl fixed top-0 z-50 border-b border-red-900/20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest uppercase flex items-center gap-3 text-white">
          <Skull className="w-6 h-6 text-red-600" />
          Abdou
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#888888] font-medium">
          <Link href="/collections" className="hover:text-red-500 transition-colors">Collections</Link>
          <Link href="/collections" className="hover:text-red-500 transition-colors">Moods</Link>
          <Link href="#" className="hover:text-red-500 transition-colors">Demos</Link>
          <Link href="#" className="hover:text-red-500 transition-colors">About</Link>
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
          <Link href="/collections" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Collections</Link>
          <Link href="/collections" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Moods</Link>
          <Link href="#" className="text-white tracking-widest uppercase text-sm hover:text-red-500">Demos</Link>
          <Link href="/collections" className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold mt-2 tracking-widest uppercase text-sm">
            Get Access
          </Link>
        </div>
      )}
    </header>
  );
}