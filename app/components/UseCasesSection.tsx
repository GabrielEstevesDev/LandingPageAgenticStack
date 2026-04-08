"use client";

import { motion } from 'framer-motion';
import { BarChart3, Mail, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [BarChart3, Mail, HeadphonesIcon];

export default function UseCasesSection() {
  const { t } = useLanguage();

  return (
    <section id="usecases" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center"
      >
      <div className="content-density-fix max-w-7xl">
        <div className="flex flex-col items-center text-center mb-5 lg:mb-8">
          <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-2">{t.usecases.eyebrow}</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">{t.usecases.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 w-full max-w-6xl">
          {t.usecases.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/10 p-4 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] hover:border-blue-500/20 transition-all duration-500 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{item.role}</span>
                </div>

                <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-red-400/60 mb-1">{t.usecases.currentLabel}</p>
                  <p className="text-xs text-white/50 leading-relaxed">&ldquo;{item.pain}&rdquo;</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400/60 mb-1">{t.usecases.withLabel}</p>
                  <p className="text-xs text-white/50 leading-relaxed">{item.solution}</p>
                </div>

                <div className={`text-xs font-black uppercase tracking-wider ${item.outcomeColor} mt-auto`}>
                  → {item.outcome}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
