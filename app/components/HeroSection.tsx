"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Bot, User, Shield, TrendingUp } from 'lucide-react';
import ToolBadge from './ui/ToolBadge';
import { useLanguage } from '../contexts/LanguageContext';

const demoConversations = [
  {
    user: "Show me top 5 products by revenue this month",
    tools: ['SQL'] as const,
    responseTime: "2.1s",
    analystTime: "~45 min",
    agent: (
      <div>
        <p className="text-[11px] text-white/60 mb-2 font-medium">Here are your top performers for March 2026:</p>
        <div className="overflow-hidden rounded-lg border border-white/5">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="bg-white/[0.03] text-white/30 font-bold uppercase tracking-wider">
                <th className="text-left px-2.5 py-1.5">#</th>
                <th className="text-left px-2.5 py-1.5">Product</th>
                <th className="text-right px-2.5 py-1.5">Revenue</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-t border-white/5"><td className="px-2.5 py-1.5 text-blue-400">1</td><td className="px-2.5 py-1.5">Wireless Pro Max</td><td className="px-2.5 py-1.5 text-right font-mono text-emerald-400">$48,290</td></tr>
              <tr className="border-t border-white/5"><td className="px-2.5 py-1.5 text-blue-400">2</td><td className="px-2.5 py-1.5">Smart Watch Elite</td><td className="px-2.5 py-1.5 text-right font-mono text-emerald-400">$35,810</td></tr>
              <tr className="border-t border-white/5"><td className="px-2.5 py-1.5 text-blue-400">3</td><td className="px-2.5 py-1.5">USB-C Hub Ultra</td><td className="px-2.5 py-1.5 text-right font-mono text-emerald-400">$22,150</td></tr>
              <tr className="border-t border-white/5"><td className="px-2.5 py-1.5 text-blue-400">4</td><td className="px-2.5 py-1.5">Noise Cancel X3</td><td className="px-2.5 py-1.5 text-right font-mono text-emerald-400">$19,400</td></tr>
              <tr className="border-t border-white/5"><td className="px-2.5 py-1.5 text-blue-400">5</td><td className="px-2.5 py-1.5">Ergo Keyboard V2</td><td className="px-2.5 py-1.5 text-right font-mono text-emerald-400">$15,670</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    user: "What's our return policy for electronics over $500?",
    tools: ['RAG'] as const,
    responseTime: "1.8s",
    analystTime: "~20 min",
    agent: (
      <div>
        <p className="text-[11px] text-white/60 mb-2 font-medium">Based on Return Policy §3.2:</p>
        <div className="p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-[11px] text-white/50 leading-relaxed">
          <p className="italic">&ldquo;Electronics priced above $500 are eligible for a <span className="text-indigo-400 font-semibold">full refund within 30 days</span> of delivery, provided the item is in its original packaging. After 30 days, a <span className="text-indigo-400 font-semibold">store credit</span> may be issued at manager discretion.&rdquo;</p>
          <p className="mt-2 text-[9px] text-white/25 font-bold uppercase tracking-wider">Source: internal_policies/returns_v4.pdf — §3.2</p>
        </div>
      </div>
    ),
  },
  {
    user: "Draft a refund email for order #1847",
    tools: ['SQL', 'RAG', 'HITL'] as const,
    responseTime: "3.4s",
    analystTime: "~30 min",
    agent: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-3.5 h-3.5 text-rose-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-rose-400">HITL Checkpoint Triggered</span>
        </div>
        <p className="text-[11px] text-white/60 mb-2 font-medium">Draft ready for review. Order #1847: $749.00 Wireless Headphones Pro.</p>
        <div className="flex gap-2 mt-2">
          <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
            <TrendingUp className="w-3 h-3" /> Approve
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[9px] font-bold text-amber-400 uppercase tracking-wider cursor-pointer">
            Edit
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[9px] font-bold text-white/30 uppercase tracking-wider cursor-pointer">
            Reject
          </div>
        </div>
      </div>
    ),
  },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoConversations.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const demo = demoConversations[activeDemo];

  return (
    <section id="hero" className="section-fixed">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="content-density-fix max-w-7xl"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono font-bold text-blue-400 mb-5 lg:mb-8 uppercase tracking-[0.3em]">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-3xl md:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tighter mb-4 lg:mb-6 uppercase italic">
              {t.hero.h1a}<br />
              {t.hero.h1b}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                {t.hero.h1c}
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-lg mb-4 leading-relaxed font-medium">
              {t.hero.sub.split(' — ')[0]}
              {t.hero.sub.includes(' — ') && (
                <> — <span className="text-white/90">{t.hero.sub.split(' — ')[1]}</span></>
              )}
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 lg:mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                {t.hero.trust1}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                {t.hero.trust2}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                {t.hero.trust3}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://agenticstack.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cyber cursor-pointer"
              >
                {t.hero.ctaPrimary} <ChevronRight className="w-4 h-4" />
              </a>
              <button
                className="btn-secondary-glass cursor-pointer"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Mock Chat Demo */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-5 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.08)]">
                {/* Window header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/80 block">{t.hero.demoLabel}</span>
                      <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" /> {t.hero.demoOnline}
                      </span>
                    </div>
                  </div>
                  {/* Carousel dots */}
                  <div className="flex gap-1.5">
                    {demoConversations.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDemo(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeDemo ? 'bg-blue-500 w-4' : 'bg-white/15 hover:bg-white/25'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Chat content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 min-h-[280px]"
                  >
                    {/* User message */}
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-blue-600/15 border border-blue-500/20 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[280px]">
                        <p className="text-[12px] text-white/90 leading-snug">{demo.user}</p>
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-white/50" />
                      </div>
                    </div>

                    {/* Agent response */}
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-white/[0.04] border border-white/10 rounded-2xl rounded-tl-sm px-3.5 py-2.5 flex-1">
                        {demo.agent}
                        <div className="pt-2.5 mt-2.5 border-t border-white/5 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 mr-0.5">{t.hero.toolsLabel}</span>
                            {demo.tools.map((tool) => (
                              <ToolBadge key={tool} tool={tool} size="sm" />
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[8px] font-mono text-emerald-400/70">⚡ {demo.responseTime}</span>
                            <span className="text-[8px] text-white/20 font-medium">{t.hero.analystVs} {demo.analystTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
