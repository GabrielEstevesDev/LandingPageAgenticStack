"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="content-density-fix max-w-7xl"
      >
        <div className="flex flex-col items-center text-center mb-3 lg:mb-6 w-full">
          <span className="text-blue-500 font-mono text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] mb-1">{t.pricing.eyebrow}</span>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-black tracking-tighter uppercase italic mb-1.5 leading-tight">{t.pricing.headline}</h2>
          <p className="text-white/40 text-[11px] lg:text-sm max-w-lg leading-relaxed mb-1.5 hidden sm:block">{t.pricing.anchor}</p>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] lg:text-[9px] font-medium text-white/30 uppercase tracking-widest backdrop-blur-md hidden sm:block">
            {t.pricing.apiNote}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 w-full max-w-6xl">
          {t.pricing.tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`relative p-3.5 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] border transition-all duration-500 flex flex-col ${'highlighted' in tier && tier.highlighted ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]' : 'bg-white/[0.03] border-white/10 hover:border-white/20'}`}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-sm lg:text-lg font-black tracking-tight uppercase italic">{tier.title}</h3>
                  {'highlighted' in tier && tier.highlighted && (
                    <span className="text-[8px] font-black uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Popular</span>
                  )}
                </div>
                <div className="mb-2 flex items-baseline gap-2 flex-wrap">
                  <span className="text-xl lg:text-3xl font-black">{tier.setup}</span>
                  {tier.monthly && (
                    <>
                      <span className="text-white/20 text-[8px] font-bold uppercase tracking-widest">Setup</span>
                      <span className="text-sm lg:text-lg font-bold text-blue-400">+{tier.monthly}<span className="text-white/20 text-[8px] font-bold uppercase tracking-widest ml-1">/ Mo</span></span>
                    </>
                  )}
                </div>
                <p className="text-white/50 text-[11px] lg:text-xs mb-2 leading-relaxed">{tier.desc}</p>
                <div className="space-y-1 mb-2">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-1.5 text-[11px] lg:text-xs text-white/70">
                      <CheckCircle2 className={`w-3 h-3 mt-0.5 flex-shrink-0 ${'highlighted' in tier && tier.highlighted ? 'text-blue-400' : 'text-white/10'}`} />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                {tier.roi && (
                  <p className="text-[9px] lg:text-[10px] text-emerald-400/70 leading-relaxed border-t border-white/5 pt-1.5 mt-1">{tier.roi}</p>
                )}
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-2 lg:py-3 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all mt-2.5 cursor-pointer ${'highlighted' in tier && tier.highlighted ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/5 hover:bg-white/10'}`}
              >
                {t.pricing.ctaButton}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
