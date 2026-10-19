"use client";
import Link from "next/link";
import { Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">A</div>
          <span className="text-white font-medium text-lg tracking-wide">AbdouPxl</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888]">
          <Link href="/collections" className="hover:text-white transition-colors">desktop</Link>
          <Link href="/collections" className="hover:text-white transition-colors">iPhone</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[#888] hover:text-white transition-colors"><Sun size={18} /></button>
          <Link href="/collections" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            get access
          </Link>
        </div>
      </div>
    </header>
  );
}