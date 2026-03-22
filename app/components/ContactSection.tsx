"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Zap } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@agenticstack.fr');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mlgpwkqz", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('idle');
        alert("Submission failed. Please try again.");
      }
    } catch {
      setFormStatus('idle');
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-fixed border-t border-white/5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="content-density-fix max-w-7xl"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase italic leading-none">RECLAIM<br />YOUR FOCUS.</h2>
            <p className="text-white/40 text-lg mb-10 max-w-sm leading-relaxed">Initiate the architecture review protocol to design your specialized AI workforce.</p>

            <div className="group flex items-center justify-between p-5 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer max-w-md" onClick={copyEmail}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500"><Mail className="w-6 h-6" /></div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Secure Comms</span>
                  <span className="font-mono text-sm uppercase tracking-widest text-white/70 group-hover:text-white">contact@agenticstack.fr</span>
                </div>
              </div>
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white/10 group-hover:text-white" />}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    <Check className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">Transmission Complete</h3>
                    <p className="text-white/40 text-sm mt-2 font-medium">Your objectives have been received. <br/>Initialization will begin shortly.</p>
                  </div>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another protocol
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute top-0 right-12 -translate-y-1/2 flex gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500/30" />
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">Identity</label>
                        <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-all outline-none" placeholder="Agent" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">Channel</label>
                        <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-all outline-none" placeholder="Email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/20 italic">Objective</label>
                      <textarea required name="message" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 transition-all resize-none outline-none" placeholder="Goals..." />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="btn-primary-cyber w-full py-4 text-xs italic disabled:opacity-50"
                    >
                      {formStatus === 'loading' ? 'Encrypting...' : 'Initiate Connection'}
                      {formStatus !== 'loading' && <Zap className="w-4 h-4 fill-white ml-2" />}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
