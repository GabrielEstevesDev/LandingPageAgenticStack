"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  setupPrice: string;
  monthlyPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ title, setupPrice, monthlyPrice, description, features, highlighted = false }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative p-6 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${
        highlighted
        ? 'bg-blue-600/10 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
        : 'bg-white/[0.03] border-white/10 hover:border-white/20'
      }`}
    >
      <div className="flex-1">
        <h3 className="text-xl font-black mb-2 tracking-tight uppercase italic">{title}</h3>
        <div className="mb-4 space-y-0.5">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black">{setupPrice}</span>
            <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Setup</span>
          </div>
          {monthlyPrice && (
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-blue-400">+{monthlyPrice}</span>
              <span className="text-white/20 text-[9px] font-bold uppercase tracking-widest">/ Mo</span>
            </div>
          )}
        </div>
        <p className="text-white/40 text-[10px] mb-6 leading-relaxed font-bold uppercase tracking-wider">{description}</p>
        <div className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-white/70">
              <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${highlighted ? 'text-blue-400' : 'text-white/10'}`} />
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <button className={`w-full py-3.5 rounded-2xl font-black uppercase tracking-widest text-[9px] transition-all mt-auto ${
        highlighted ? 'bg-blue-600 hover:bg-blue-500' : 'bg-white/5 hover:bg-white/10'
      }`}>
        {setupPrice === "Custom" ? "Contact Architecture" : "Deploy Unit"}
      </button>
    </motion.div>
  );
}
