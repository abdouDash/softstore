import Link from "next/link";
import { CheckCircle2, Download } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-[#050505] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="lightning-glow top-1/2 left-1/2"></div>
      
      <div className="relative z-10 max-w-md w-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-green-500" />
        </div>
        
        <h1 className="text-3xl font-medium mb-4 text-white">Payment Successful!</h1>
        <p className="text-[#888888] mb-8">
          Thank you for your purchase. Your high-resolution wallpaper pack is ready to be downloaded.
        </p>

        <button className="btn-glow w-full py-4 px-8 text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 mb-4">
          <Download size={20} /> Download Pack (.zip)
        </button>
        
        <p className="text-sm text-[#888888]">
          A download link has also been sent to your email.
        </p>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <Link href="/" className="text-sm text-white hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}