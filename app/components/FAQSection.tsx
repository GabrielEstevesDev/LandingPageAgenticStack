"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center"
      >
      <div className="content-density-fix max-w-4xl w-full">
        <div className="flex flex-col items-center text-center mb-6 lg:mb-14">
          <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-3">{t.faq.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic whitespace-pre-line">{t.faq.headline}</h2>
        </div>

        <div className="space-y-2 lg:space-y-3 w-full">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-4 lg:p-6 text-left group cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-black uppercase tracking-wide text-white/70 group-hover:text-white transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-white/20 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-blue-400' : ''}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-4 lg:px-6 pb-4 lg:pb-6 text-sm text-white/40 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
