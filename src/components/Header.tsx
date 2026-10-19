"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="text-red-600 font-black text-2xl">A</span>
          AbdouPxl
        </Link>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="/" className="hover:text-white transition-colors">desktop</Link>
          <Link href="/collections" className="hover:text-white transition-colors">iPhone</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/collections" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            get access
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4 text-center">
          <Link href="/" className="text-white text-lg hover:text-red-500">desktop</Link>
          <Link href="/collections" className="text-white text-lg hover:text-red-500">iPhone</Link>
          <Link href="/contact" className="text-white text-lg hover:text-red-500">Contact</Link>
          <Link href="/collections" className="bg-white text-black px-6 py-3 rounded-full font-semibold mt-4">get access</Link>
        </div>
      )}
    </header>
  );
}