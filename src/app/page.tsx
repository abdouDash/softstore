"use client";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Download, Layers, Monitor, Star, ArrowUpRight, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PACKS = [
  { id: 1, slug: "luxury-cars", title: "luxury cars", price: 12.00, image: "https://images.unsplash.com/photo-1549396535-c11d5c69b9c2?q=80&w=800&auto=format&fit=crop", tag: "LATEST DROP" },
  { id: 2, slug: "timepieces", title: "timepieces", price: 15.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" },
  { id: 3, slug: "the-suit", title: "the suit", price: 10.00, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop" },
  { id: 4, slug: "the-yacht", title: "the yacht", price: 18.00, image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop" },
  { id: 5, slug: "whiskey-cigars", title: "whiskey & cigars", price: 9.00, image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop" },
  { id: 6, slug: "the-estate", title: "the estate", price: 20.00, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: 7, slug: "classic-art", title: "classic art", price: 8.00, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop" },
  { id: 8, slug: "the-library", title: "the library", price: 11.00, image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop" },
  { id: 9, slug: "the-club", title: "the club", price: 14.00, image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop" },
];

const BUNDLES = [
  { id: 1, title: "pokémon", desc: "v.1 + v.2 · 21 wallpapers", price: 12, oldPrice: 14, image: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=400&auto=format&fit=crop" },
  { id: 2, title: "quotes", desc: "v.1 + v.2 · 20 wallpapers", price: 12, oldPrice: 14, image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop" },
  { id: 3, title: "mixed feelings", desc: "v.1 + v.2 · 8 wallpapers", price: 12, oldPrice: 14, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400&auto=format&fit=crop" },
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
  const rotateX = useTransform(y, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div 
      className="perspective-[1200px] w-full" 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="group cursor-pointer flex flex-col card-hover-glow rounded-2xl border border-white/5 bg-[#0a0a0a] p-3"
      >
        <Link href={`/packs/${pack.slug}`}>
          <div className="bg-[#181818] rounded-xl p-6 flex items-center justify-center aspect-[4/3] relative overflow-hidden">
            {pack.tag && (
              <div className="absolute top-3 left-3 bg-red-500/10 text-red-400 border border-red-500/20 text-[9px] font-bold px-2 py-1 rounded-full tracking-wider z-20">
                {pack.tag}
              </div>
            )}
            <div className="relative w-full max-w-[200px]">
              <div className="bg-black rounded-lg p-1 border-[2px] border-gray-700 shadow-2xl relative z-10">
                <img src={pack.image} alt={pack.title} className="w-full aspect-video object-cover rounded-md card-image" />
              </div>
              <div className="relative flex flex-col items-center -mt-0.5 z-0">
                <div className="w-12 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm"></div>
                <div className="w-24 h-1.5 bg-gray-400 rounded-t-sm shadow-md"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start mt-4 px-2 pb-2">
            <div>
              <h3 className="text-base font-medium text-white group-hover:text-red-400 transition-colors">{pack.title}</h3>
              <p className="text-xs text-[#888] mt-0.5">10 wallpapers</p>
            </div>
            <p className="text-sm text-white font-medium">${pack.price.toFixed(2)}</p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="w-full min-h-screen pt-20 bg-[#050505] relative overflow-hidden">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="hero-glow"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10 flex flex-col items-center">
          <div className="latest-badge mb-8">LATEST DROP — OLD MONEY</div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif tracking-tight leading-none text-white mb-6">
            screens,<br/>elevated.
          </h1>
          <p className="text-[#888] max-w-md mx-auto mb-10 text-base sm:text-lg font-light">
            curated 4K wallpapers designed to transform your desktop into something beautiful.
          </p>
          <Link href="#collection" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            browse collection <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Stats with Animated Counters */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-white mb-2">
                <AnimatedCounter target={451} />
              </span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Wallpapers</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="stat-divider"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-white mb-2">
                <AnimatedCounter target={5000} suffix="+" />
              </span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Packs Sold</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="stat-divider"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-white mb-2">4K</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Resolution</span>
            </div>
            <div className="hidden md:flex justify-center"><div className="stat-divider"></div></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-white mb-2">5</span>
              <span className="text-[10px] tracking-widest text-[#888] uppercase">Star Rated</span>
            </div>
          </div>
        </section>

        {/* Bundle Banner */}
        <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">build your own bundle</h3>
            <p className="text-sm text-[#888888]">pick any packs you like and save up to 35%</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              3 packs <span className="text-[#888]">$18</span>
            </button>
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              5 packs <span className="text-[#888]">$29</span>
            </button>
            <button className="border border-white/10 text-sm text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
              10 packs <span className="text-[#888]">$49</span>
            </button>
            <button className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors ml-2">
              start picking
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-6 md:gap-8 mb-16 overflow-x-auto pb-4">
          {["all 81", "old money 24", "luxury 16", "cars 8", "art 13", "watch 7"].map((item, i) => (
            <button key={i} className={`text-sm whitespace-nowrap pb-2 ${i === 0 ? 'text-white border-b-2 border-white' : 'text-[#888] hover:text-white transition-colors'}`}>
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div id="collection" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {PACKS.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>

        {/* Complete Sets (Bundles) */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold tracking-widest text-red-500 uppercase mb-2">Complete Sets</div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">both volumes. one price.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUNDLES.map((bundle, i) => (
              <motion.div 
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 flex items-center justify-between gap-4 group cursor-pointer hover:border-white/10 transition-colors ${i === 2 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-24 h-20 bg-[#1a1a1a] rounded-xl overflow-hidden relative">
                    <img src={bundle.image} alt={bundle.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-white mb-1">{bundle.title}</h3>
                    <p className="text-xs text-[#888] mb-2">{bundle.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">${bundle.price}</span>
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
                className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl feature-icon flex items-center justify-center mb-6">
                  <feat.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0000] to-[#050505] border border-red-900/20 p-12 md:p-20 text-center mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">elevate your screen today.</h2>
            <p className="text-[#888] mb-8 max-w-md mx-auto">transform your desktop into something beautiful. join thousands of satisfied creators.</p>
            <Link href="#collection" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              get access <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#888]">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-white font-serif text-lg flex items-center gap-2">
              <span className="text-red-600 font-sans font-black">A</span> AbdouPxl
            </div>
            <p className="text-xs">screens, elevated.</p>
          </div>
          <div className="flex gap-8">
            <Link href="/collections" className="hover:text-white transition-colors">collection</Link>
            <Link href="#" className="hover:text-white transition-colors">reviews</Link>
            <Link href="#" className="hover:text-white transition-colors">privacy policy</Link>
            <Link href="#" className="hover:text-white transition-colors">terms</Link>
          </div>
          <p className="text-xs">© 2026 AbdouPxl. all rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}