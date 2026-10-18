import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#050505]/80 backdrop-blur-md fixed top-0 z-50 border-b border-white/5">
      <style>{`
        @keyframes colorShift {
          0% { color: #ff7e5f; text-shadow: 0 0 10px #ff7e5f, 0 0 20px #ff7e5f; }
          33% { color: #feb47b; text-shadow: 0 0 10px #feb47b, 0 0 20px #feb47b; }
          66% { color: #a855f7; text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7; }
          100% { color: #ff7e5f; text-shadow: 0 0 10px #ff7e5f, 0 0 20px #ff7e5f; }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }
        .animated-a {
          animation: colorShift 4s infinite linear, floatLogo 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo with Animated A */}
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
            <span className="animated-a relative z-10 text-3xl font-black">A</span>
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