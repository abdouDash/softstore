"use client";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo (Glass Pill) */}
        <Link href="/" className="glass-pill px-4 py-2 flex items-center gap-2">
          <span className="text-red-600 font-black text-xl">A</span>
          <span className="text-white font-medium text-sm tracking-wide">AbdouPxl</span>
        </Link>

        {/* Center Nav (Glass Pills) */}
        <nav className="hidden md:flex items-center gap-2">
          <Link href="/collections" className="glass-pill px-5 py-2 text-sm text-white hover:text-red-400">desktop</Link>
          <Link href="/collections" className="glass-pill px-5 py-2 text-sm text-white hover:text-red-400">iPhone</Link>
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-4">
          <button className="glass-pill p-2.5 text-white hover:text-yellow-400">
            <Sun size={18} />
          </button>
          <Link href="/collections" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            get access
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}