"use client";

import { motion } from 'framer-motion';
import PricingCard from './ui/PricingCard';

export default function PricingSection() {
  return (
    <section id="pricing" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="content-density-fix max-w-7xl"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-3">Strategic Investment</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-4 leading-tight">Scaled Infrastructure.</h2>
          <div className="px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-[9px] font-black text-red-400 uppercase tracking-widest backdrop-blur-md">
            Note: LLM API usage fees (OpenAI, Anthropic Claude, etc.) are billed directly to the client.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <PricingCard
            title="The Micro-RAG" setupPrice="€150" monthlyPrice="€20" description="Precision retrieval for private document sets and search automation."
            features={["Semantic PDF Search", "Web Oracle Access", "Persona Tuning", "Automated Reports"]}
          />
          <PricingCard
            title="The Data Bridge" setupPrice="€400" monthlyPrice="€45" highlighted={true} description="AI-powered secure business database intelligence."
            features={["Secure Read-only SQL Integration", "Multi-source RAG", "Natural Language Queries", "24/7 Monitoring"]}
          />
          <PricingCard
            title="Full Automation" setupPrice="Custom" description="Total workforce automation with human orchestration."
            features={["Complex Agentic Logic", "End-to-End Flows", "HITL Safety Controls", "Priority Support"]}
          />
        </div>
      </motion.div>
    </section>
  );
}
