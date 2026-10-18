"use client";
import { useState } from "react";
import Link from "next/link";
import { BadgeCheck, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#050000]/80 backdrop-blur-md fixed top-0 z-50 border-b border-red-900/20">
      <style>{`
        @keyframes colorShift {
          0% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
          50% { color: #8b0000; text-shadow: 0 0 10px #8b0000; }
          100% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
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
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center gap-2 md:gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
            <span className="animated-a relative z-10 text-2xl md:text-3xl font-black">A</span>
          </div>
          AbdouPxl
          <BadgeCheck className="w-4 h-4 md:w-5 md:h-5 text-red-500" fill="#050000" />
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="/collections" className="hover:text-red-500 transition-colors">Collections</Link>
          <Link href="/collections" className="hover:text-red-500 transition-colors">Moods</Link>
          <Link href="#" className="hover:text-red-500 transition-colors">Support</Link>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-sm text-[#888888] font-medium">
          <Link href="/collections" className="hover:text-white transition-colors">desktop</Link>
          <Link href="/collections" className="hover:text-white transition-colors">iPhone</Link>
          <Link href="/collections" className="bg-gradient-to-r from-red-800 to-red-950 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            get access
          </Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0000] border-b border-red-900/30 absolute w-full left-0 top-20 flex flex-col p-6 gap-4 text-center">
          <Link href="/collections" className="text-white hover:text-red-500">Collections</Link>
          <Link href="/collections" className="text-white hover:text-red-500">Moods</Link>
          <Link href="#" className="text-white hover:text-red-500">Support</Link>
          <Link href="/collections" className="bg-gradient-to-r from-red-800 to-red-950 text-white px-6 py-3 rounded-full font-semibold mt-2">
            get access
          </Link>
        </div>
      )}
    </header>
  );
}