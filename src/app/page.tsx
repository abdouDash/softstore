"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Monitor, Download, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PACKS = [
  { id: 1, slug: "hustle", title: "hustle", price: 7.00, image: "https://images.unsplash.com/photo-1549396535-c11d5c69b9c2?q=80&w=800&auto=format&fit=crop", tag: "LATEST DROP", glowBorder: "rgba(59, 130, 246, 0.4)", glowShadow: "rgba(59, 130, 246, 0.15)", dots: 6, activeDot: 4 },
  { id: 2, slug: "delusional", title: "delusional", price: 8.00, image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop", tag: "EXCLUSIVE", glowBorder: "rgba(245, 158, 11, 0.4)", glowShadow: "rgba(245, 158, 11, 0.15)", dots: 7, activeDot: 5 },
  { id: 3, slug: "abstract", title: "abstract", price: 7.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop", glowBorder: "rgba(59, 130, 246, 0.4)", glowShadow: "rgba(59, 130, 246, 0.15)", dots: 5, activeDot: 2 },
  { id: 4, slug: "born-great", title: "born to be great", price: 9.00, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop", glowBorder: "rgba(220, 38, 38, 0.4)", glowShadow: "rgba(220, 38, 38, 0.15)", dots: 6, activeDot: 3 },
  { id: 5, slug: "fire", title: "fire", price: 10.00, image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", glowBorder: "rgba(249, 115, 22, 0.4)", glowShadow: "rgba(249, 115, 22, 0.15)", dots: 4, activeDot: 1 },
  { id: 6, slug: "money", title: "money heist", price: 12.00, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop", glowBorder: "rgba(34, 197, 94, 0.4)", glowShadow: "rgba(34, 197, 94, 0.15)", dots: 8, activeDot: 6 },
];

const BUNDLES = [
  { id: 1, title: "pokémon", desc: "v.1 + v.2 · 21 wallpapers", price: 12, oldPrice: 14, images: ["https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=200&auto=format&fit=crop"] },
  { id: 2, title: "quotes", desc: "v.1 + v.2 · 20 wallpapers", price: 12, oldPrice: 14, images: ["https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=200&auto=format&fit=crop"] },
  { id: 3, title: "mixed feelings", desc: "v.1 + v.2 · 8 wallpapers", price: 12, oldPrice: 14, images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=200&auto=format&fit=crop", "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=200&auto=format&fit=crop"] },
];

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number, suffix?: string, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        onUpdate: (v) => setValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

function PackCard({ pack }: { pack: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-6deg", "6deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div 
      className="perspective-[1200px] w-full group cursor-pointer" 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ '--card-glow-border': pack.glowBorder, '--card-glow-shadow': pack.glowShadow } as React.CSSProperties}
    >
      <Link href={`/packs/${pack.slug}`}>
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="flex flex-col">
          
          <div className="pack-card">
            {/* Badge */}
            {pack.tag && (
              <div className={`absolute top-5 left-5 z-20 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                pack.tag === 'EXCLUSIVE' 
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' 
                  : 'bg-white/10 text-white border border-white/10'
              }`}>
                {pack.tag}
              </div>
            )}

            {/* iMac 3D */}
            <div className="relative w-full max-w-[200px]">
              <div className="imac-frame">
                <div className="imac-screen">
                  <img src={pack.image} alt={pack.title} className="w-full aspect-[16/10] object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="imac-chin"><div className="imac-logo"></div></div>
              </div>
              <div className="imac-stand-neck"></div>
              <div className="imac-stand-base"></div>
            </div>

            {/* Dots */}
            <div className="slider-dots">
              {[...Array(pack.dots)].map((_, i) => (
                <div key={i} className={`dot ${i === pack.activeDot ? 'active' : ''}`}></div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-start px-2 mt-4" style={{ transform: "translateZ(20px)" }}>
            <div>
              <h3 className="text-[15px] font-semibold text-white group-hover:text-[var(--card-glow-border)] transition-colors mb-1">{pack.title}</h3>
              <p className="text-[13px] text-[#888]">10 wallpapers <span className="mx-1">•</span> ${pack.price.toFixed(2)}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#0a0a0a] relative overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 flex flex-col items-center text-center">
        <div className="hero-radial-glow"></div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center">
          <div className="latest-badge mb-8">
            <div className="latest-badge-dot"></div>
            LATEST DROP — BELIEVE
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading font-medium tracking-tight text-white mb-6">
            screens,<br/>elevated.
          </h1>
          
          <p className="text-[#888] max-w-md mx-auto mb-10 text-[15px]">
            curated 4K wallpapers designed to transform<br/>your iPhone & desktop into something beautiful.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#collection" className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              browse collection <ArrowRight size={16} />
            </Link>
            <span className="text-sm text-[#888]">screens, elevated.</span>
          </div>
        </motion.div>

        {/* Hero Big iMac */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-20 relative w-full max-w-[800px] mx-auto px-6 z-10">
          <div className="imac-frame shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
            <div className="imac-screen">
              <img src="https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=1600&auto=format&fit=crop" alt="Hero" className="w-full aspect-[16/9] object-cover" />
            </div>
            <div className="imac-chin h-10"><div className="imac-logo w-3 h-3"></div></div>
          </div>
          <div className="imac-stand-neck w-32 h-24"></div>
          <div className="imac-stand-base w-64 h-3"></div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Stats */}
        <section className="mb-24 pt-12 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-heading text-white mb-2"><AnimatedCounter target={451} /></span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Wallpapers</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="w-px h-12 bg-white/10"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-heading text-white mb-2"><AnimatedCounter target={5000} suffix="+" /></span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Packs Sold</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="w-px h-12 bg-white/10"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-heading text-white mb-2">4K</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Resolution</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="w-px h-12 bg-white/10"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-heading text-white mb-2">5</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Star Rated</span>
            </div>
          </div>
        </section>

        {/* Collection Header */}
        <section className="text-center mb-12">
          <div className="text-[10px] font-bold tracking-widest text-[#888] uppercase mb-4">DESKTOP WALLPAPERS</div>
          <h2 className="text-4xl font-heading text-white mb-4">mac collection</h2>
          <p className="text-sm text-[#888]">click a pack to preview the wallpapers inside.</p>
        </section>

        {/* Bundle Banner */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-col">
            <h3 className="text-[15px] font-semibold text-white mb-1">build your own bundle</h3>
            <p className="text-xs text-[#888]">pick any packs you like and save up to 35%</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button className="border border-white/10 text-xs text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">3 packs <span className="text-[#888] ml-1">$18</span></button>
            <button className="border border-white/10 text-xs text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">5 packs <span className="text-[#888] ml-1">$29</span></button>
            <button className="border border-white/10 text-xs text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">10 packs <span className="text-[#888] ml-1">$49</span></button>
            <button className="bg-white text-black font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors ml-2">start picking</button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-12 overflow-x-auto pb-4">
          {["all 81", "mindset 16", "luxury 24", "cars 8", "cinema 13", "icons 7", "art 13"].map((item, i) => (
            <button key={i} className={`text-[13px] whitespace-nowrap pb-2 ${i === 0 ? 'text-white border-b-2 border-white' : 'text-[#888] hover:text-white transition-colors'}`}>
              {item.split(' ')[0]} <span className="text-[10px] text-[#555] ml-0.5">{item.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div id="collection" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {PACKS.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>

        {/* Complete Sets (Bundles) */}
        <section className="mb-24 pt-12 border-t border-white/5">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold tracking-widest text-[#ff0000] uppercase mb-2">COMPLETE SETS</div>
            <h2 className="text-4xl font-heading text-white">both volumes. one price.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUNDLES.map((bundle, i) => (
              <motion.div 
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-[#141414] border border-white/5 rounded-2xl p-6 flex items-center justify-between gap-4 group cursor-pointer hover:border-white/10 transition-colors ${i === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
              >
                <div className="flex items-center gap-6">
                  <div className="stacked-images">
                    <img src={bundle.images[0]} className="stacked-img" />
                    <img src={bundle.images[1]} className="stacked-img" />
                    <img src={bundle.images[2]} className="stacked-img" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading text-white mb-1">{bundle.title}</h3>
                    <p className="text-xs text-[#888] mb-2">{bundle.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold text-lg">${bundle.price}</span>
                      <span className="text-xs text-[#666] line-through">${bundle.oldPrice}</span>
                      <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-bold">save ${bundle.oldPrice - bundle.price}</span>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "4K resolution", desc: "every wallpaper is designed at the highest quality for retina displays." },
              { icon: Download, title: "instant download", desc: "get immediate access to all wallpapers right after checkout. no waiting." },
              { icon: Layers, title: "new drops monthly", desc: "fresh wallpapers added every month. stay ahead of the curve." },
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <feat.icon size={20} className="text-white" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#888]">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-white font-heading text-lg flex items-center gap-2">
              <span className="text-red-600 font-bold">A</span> AbdouPxl
            </div>
            <p className="text-xs text-[#555]">screens, elevated.</p>
          </div>
          <div className="flex gap-8 text-xs font-medium">
            <Link href="/collections" className="hover:text-white transition-colors">collection</Link>
            <Link href="#" className="hover:text-white transition-colors">reviews</Link>
            <Link href="#" className="hover:text-white transition-colors">privacy policy</Link>
            <Link href="#" className="hover:text-white transition-colors">terms</Link>
          </div>
          <p className="text-xs text-[#555]">© 2026 AbdouPxl. all rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}