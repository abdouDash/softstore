"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">A</div>
          AbdouPxl
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#888888]">
          <Link href="/collections" className="hover:text-white transition-colors">desktop</Link>
          <Link href="/collections" className="hover:text-white transition-colors">iPhone</Link>
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-white hover:text-gray-300">
            <Sun size={20} />
          </button>
          <Link href="/collections" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
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