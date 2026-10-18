"use client";
import { useState } from "react";
import Link from "next/link";
import { BadgeCheck, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#050505]/80 backdrop-blur-md fixed top-0 z-50 border-b border-white/5">
      <style>{`
        @keyframes colorShift {
          0% { color: #ff7e5f; text-shadow: 0 0 10px #ff7e5f; }
          50% { color: #feb47b; text-shadow: 0 0 10px #feb47b; }
          100% { color: #a855f7; text-shadow: 0 0 10px #a855f7; }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }
        .animated-a {
          animation: colorShift 4s infinite linear, floatLogo 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 md:gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
            <span className="animated-a relative z-10 text-2xl md:text-3xl font-black">A</span>
          </div>
          AbdouPxl
          <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-500" fill="#050505" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="#" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="#" className="hover:text-white transition-colors">License</Link>
          <Link href="#" className="hover:text-white transition-colors">Support</Link>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm text-[#888888] font-medium">
          <Link href="#" className="hover:text-white transition-colors">desktop</Link>
          <Link href="#" className="hover:text-white transition-colors">iPhone</Link>
          <Link href="#" className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,120,80,0.3)]">
            get access
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 absolute w-full left-0 top-20 flex flex-col p-6 gap-4 text-center">
          <Link href="#" className="text-white hover:text-gray-300">Gallery</Link>
          <Link href="#" className="text-white hover:text-gray-300">License</Link>
          <Link href="#" className="text-white hover:text-gray-300">Support</Link>
          <Link href="#" className="text-white hover:text-gray-300">desktop</Link>
          <Link href="#" className="text-white hover:text-gray-300">iPhone</Link>
          <Link href="#" className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold mt-2">
            get access
          </Link>
        </div>
      )}
    </header>
  );
}