import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#050505]/80 backdrop-blur-md fixed top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo with Verified Badge */}
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-orange-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-orange-500/20">
            A
          </div>
          AbdouPxl
          <BadgeCheck className="w-5 h-5 text-blue-500" fill="#050505" />
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="#" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="#" className="hover:text-white transition-colors">License</Link>
          <Link href="#" className="hover:text-white transition-colors">Support</Link>
        </div>

        {/* Right Nav */}
        <nav className="flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="#" className="hover:text-white transition-colors">desktop</Link>
          <Link href="#" className="hover:text-white transition-colors">iPhone</Link>
          <Link href="#" className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,120,80,0.3)]">
            get access
          </Link>
        </nav>
      </div>
    </header>
  );
}