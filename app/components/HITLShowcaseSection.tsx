"use client";

import { motion } from 'framer-motion';
import { Search, FileCheck, UserCheck, Tag, Truck } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import HITLApprovalCard from './ui/HITLApprovalCard';
import ToolBadge from './ui/ToolBadge';

const steps = [
  {
    icon: Search,
    title: 'Agent Researches',
    description: 'AI queries your database and searches internal docs for evidence and context.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: FileCheck,
    title: 'Draft for Review',
    description: 'A structured draft is prepared with risk tags, evidence, and editable controls.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: UserCheck,
    title: 'You Approve',
    description: 'Review the draft, adjust parameters, and approve — nothing ships without your sign-off.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
];

const otherHitlScenarios = [
  {
    icon: Tag,
    title: '30-Day Promotion Strategy',
    description: 'Full campaign plan with budget controls, segment targeting, and weekly calendar — awaiting your approval.',
    tools: ['SQL', 'PYTHON_CHART', 'HITL'] as const,
  },
  {
    icon: Truck,
    title: 'Replenishment + Purchase Order',
    description: 'Prioritized SKU reorder list with quantities based on sales velocity — requires sign-off before dispatch.',
    tools: ['SQL', 'PYTHON_CHART', 'HITL'] as const,
  },
];

export default function HITLShowcaseSection() {
  return (
    <section id="hitl" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="content-density-fix max-w-6xl"
      >
        <SectionHeader
          label="Safety Protocol"
          title="HUMAN-IN-THE-LOOP."
          subtitle="Your AI researches and drafts. You review and approve. Nothing ships without your sign-off."
        />

        {/* 3-Step Flow */}
        <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center flex flex-col items-center"
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} mb-4`}>
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-mono font-bold text-white/20 uppercase tracking-wider">0{i + 1}</span>
                <h3 className="text-sm lg:text-base font-black uppercase italic tracking-tight">{step.title}</h3>
              </div>
              <p className="text-[11px] text-white/35 leading-relaxed max-w-[200px] font-medium">{step.description}</p>
              {i < 2 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <div className="w-8 h-px bg-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* HITL Approval Card */}
        <HITLApprovalCard />

        {/* Other HITL scenarios */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {otherHitlScenarios.map((scenario, i) => (
            <motion.a
              key={i}
              href="https://agenticstack.store/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-rose-500/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/15 flex items-center justify-center text-rose-400 flex-shrink-0 group-hover:bg-rose-500/20 transition-colors">
                <scenario.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-black uppercase italic tracking-tight group-hover:text-rose-400 transition-colors">{scenario.title}</h4>
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-white/35 leading-relaxed mb-2 font-medium">{scenario.description}</p>
                <div className="flex items-center gap-1.5">
                  {scenario.tools.map((tool) => (
                    <ToolBadge key={tool} tool={tool} size="sm" />
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
