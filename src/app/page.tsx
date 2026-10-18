"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Star, ArrowRight } from "lucide-react";

const THEMES = [
  { id: 1, slug: "draculas-castle", title: "Dominion Edition", type: "Premium Theme", price: 49.00, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop" },
  { id: 2, slug: "blood-ritual", title: "Archive Edition", type: "Premium Theme", price: 49.00, image: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "gothic-mist", title: "Prestige Edition", type: "Premium Theme", price: 49.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "crimson-night", title: "Magma Edition", type: "Aero Theme", price: 39.00, image: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      <div className="blood-moon"></div>

      {/* Hero Section */}
      <section className="relative max-w-[1400px] mx-auto px-4 md:px-8 pt-24 pb-32 flex flex-col items-center text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center">
          <div className="border border-red-500/30 bg-red-900/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-8 text-red-500">
            The High End Storefront Kit — Vampire Edition
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none text-white spooky-glow mb-8 max-w-5xl mx-auto">
            Launch Your Brand With <span className="text-red-600">Crimson Studios</span>
          </h1>
          
          <p className="text-[#aaa] max-w-2xl mx-auto mb-10 text-base md:text-xl font-light">
            Exclusive Themes, Premium Liquid Sections, and Lifetime Priority Support. Build your Digital Identity and launch your dark brand today.
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-12 mb-12 border-y border-red-900/30 py-4 w-full justify-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">4.8/5</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Rating</span>
            </div>
            <div className="w-px h-10 bg-red-900/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">34%</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Conversion</span>
            </div>
            <div className="w-px h-10 bg-red-900/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">24h</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Support</span>
            </div>
          </div>

          <Link href="#themes" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center gap-2">
            Explore Themes <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="marquee-container relative z-10">
        <div className="marquee-content flex gap-8 text-2xl font-bold uppercase tracking-widest">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex gap-8 items-center">
              <span className="text-outline">SHOPIFY THEMES</span>
              <span className="text-red-600">•</span>
              <span className="text-white">PREMIUM / CRIMSON</span>
              <span className="text-red-600">•</span>
              <span className="text-outline">HIGH CONVERSION</span>
              <span className="text-red-600">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Themes Grid */}
      <section id="themes" className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Theme Collection</h2>
          <p className="text-[#888888] max-w-xl">From raw concept to luxury flagship — define your identity with premium dark architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {THEMES.map((theme, i) => (
            <motion.div 
              key={theme.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: i * 0.1 }} 
              className="group cursor-pointer"
            >
              <Link href={`/packs/${theme.slug}`}>
                <div className="relative aspect-[16/10] bg-[#0a0000] rounded-2xl overflow-hidden border border-red-900/30 mb-6">
                  <img src={theme.image} alt={theme.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050000] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-xs font-bold tracking-widest text-red-500 uppercase mb-2 block">{theme.type}</span>
                      <h3 className="text-2xl font-serif text-white">{theme.title}</h3>
                    </div>
                    <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      View Demo
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Trust */}
      <section className="border-t border-red-900/30 py-12 relative z-10 bg-black/50">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-[#888]">
          <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-red-500"/> Secure Checkout</span>
          <span className="flex items-center gap-2"><Zap size={18} className="text-red-500"/> Instant Delivery</span>
          <span className="flex items-center gap-2"><Lock size={18} className="text-red-500"/> Premium Support</span>
        </div>
      </section>

    </div>
  );
}