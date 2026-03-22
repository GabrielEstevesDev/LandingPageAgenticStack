"use client";

import { motion } from 'framer-motion';
import { Compass, Cpu, Terminal, Activity } from 'lucide-react';

const steps = [
  { phase: "01 Architecture", title: "Discovery", desc: "Need Analysis & Architecture designed to eliminate scaling bottlenecks.", icon: Compass },
  { phase: "02 Intelligence", title: "Build", desc: "LangGraph agents, RAG systems, and secure SQL read-only layers.", icon: Cpu },
  { phase: "03 Integration", title: "Tools", desc: "Connecting agents to Web Search, Python executors, and custom API hooks.", icon: Terminal },
  { phase: "04 Operations", title: "Deployment", desc: "Live production deployment with 24/7 monitoring and safety protocols.", icon: Activity },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="content-density-fix max-w-7xl"
      >
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-4">Precision Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">ENGINEERING ROI.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] group hover:border-blue-500/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em] mb-4 block font-black">{item.phase}</span>
              <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight uppercase italic group-hover:text-blue-400 transition-colors">{item.title}</h2>
              <p className="text-sm md:text-base text-white/40 leading-relaxed group-hover:text-white/80 transition-colors font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
