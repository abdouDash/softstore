"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen pt-32 pb-20 bg-[#050000] relative overflow-hidden font-sans vampire-bg">
      <div className="fog"></div>
      <div className="lightning-container">
        <div className="lightning"></div>
        <div className="lightning"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white spooky-glow mb-4">Contact Us</h1>
          <p className="text-[#888888]">Have questions about our packs? Need custom work? Drop us a message.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-[#0a0000]/80 backdrop-blur-md border border-red-900/30 p-8 rounded-3xl shadow-[0_0_40px_rgba(220,38,38,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full bg-black/50 border border-red-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Email</label>
              <input type="email" className="w-full bg-black/50 border border-red-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="your@email.com" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Message</label>
            <textarea rows={5} className="w-full bg-black/50 border border-red-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="w-full bg-red-800 hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2">
            <Send size={18} /> Send Message
          </button>
        </motion.form>
        
        <div className="flex justify-center gap-8 mt-12 text-[#888]">
          <span className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer"><Mail size={18}/> support@abdou.com</span>
          <span className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer"><MessageSquare size={18}/> Live Chat</span>
        </div>
      </div>
    </div>
  );
}