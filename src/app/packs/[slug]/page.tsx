import Link from "next/link";
import { ShieldCheck, Download, Zap, Flame } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export default async function PackPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const pack = {
    title: slug.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase()),
    price: 12.00,
    description: "A curated collection of 4K wallpapers designed to elevate your desktop aesthetic. Includes 15 high-resolution images optimized for all screen sizes.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
  };

  return (
    <div className="w-full min-h-screen pt-20 bg-[#050505] relative overflow-hidden">
      <div className="lightning-glow top-1/3 left-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="text-sm text-[#888888] hover:text-white mb-10 inline-block transition-colors">
          ← Back to Packs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative aspect-[4/3] bg-[#111] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img src={pack.image} alt={pack.title} className="object-cover w-full h-full opacity-90" />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-medium mb-4 text-white">{pack.title}</h1>
            
            <div className="flex items-center gap-2 text-sm text-orange-400 mb-6 font-medium">
              <Flame size={18} />
              <span>12 people bought this today</span>
            </div>

            <p className="text-[#888888] text-lg mb-8 leading-relaxed">
              {pack.description}
            </p>
            
            <div className="border-t border-white/10 pt-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-white">Price</span>
                <span className="text-3xl font-medium text-white">${pack.price.toFixed(2)}</span>
              </div>
              <ul className="text-sm text-[#888888] space-y-3 mb-8">
                <li className="flex items-center gap-2"><Download size={16} className="text-white"/> 15 high-resolution 4K images</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-white"/> Desktop (16:9) & Vertical (9:16) formats</li>
                <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-white"/> Instant download after purchase</li>
              </ul>
            </div>

            <CheckoutButton price={pack.price} title={pack.title} slug={slug} />
            
            <p className="text-center text-xs text-[#888888] mt-4">Secure checkout powered by Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}