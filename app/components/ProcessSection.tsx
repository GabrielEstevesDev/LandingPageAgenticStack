"use client";

import { motion } from 'framer-motion';
import { Compass, Cpu, Database, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Compass, Cpu, Database, Activity];

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center"
      >
      <div className="content-density-fix max-w-7xl">
        <div className="flex flex-col items-center text-center mb-8 lg:mb-16">
          <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-3">{t.process.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic">{t.process.headline}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {t.process.steps.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] group hover:border-blue-500/30 transition-all duration-500 flex flex-col">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-4 lg:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <Icon className="w-5 h-5 lg:w-8 lg:h-8" />
                </div>
                <span className="text-[9px] lg:text-[11px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2 block font-black">{item.phase}</span>
                <h2 className="text-base lg:text-2xl font-black mb-2 lg:mb-4 tracking-tight uppercase italic group-hover:text-blue-400 transition-colors">{item.title}</h2>
                <p className="text-xs text-white/40 leading-relaxed group-hover:text-white/70 transition-colors font-medium mb-3 flex-1">{item.desc}</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-blue-500/60 border-t border-white/5 pt-3">{item.credential}</p>
              </div>
            );
          })}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
