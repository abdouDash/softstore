import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#050505]/80 backdrop-blur-md fixed top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs">A</div>
          AbdouPxl
        </Link>
        <nav className="flex items-center gap-8 text-sm text-[#888888] font-medium">
          <Link href="#" className="hover:text-white transition-colors">desktop</Link>
          <Link href="#" className="hover:text-white transition-colors">iPhone</Link>
          <Link href="#" className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">get access</Link>
        </nav>
      </div>
    </header>
  );
}
