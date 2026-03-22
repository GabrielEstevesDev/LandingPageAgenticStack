"use client";

import { motion } from 'framer-motion';
import { Shield, FileText, AlertTriangle, CheckCircle2 } from 'lucide-react';
import ToolBadge from './ToolBadge';

export default function HITLApprovalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="relative bg-white/[0.04] border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.08)]">
        {/* Glow effect */}
        <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-blue-500/10 via-transparent to-rose-500/5 pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">HITL Approval</span>
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              </div>
              <h4 className="text-sm font-black tracking-tight text-white mt-0.5">Customer Refund Email — Order #1847</h4>
            </div>
          </div>
        </div>

        {/* Risk + Tools */}
        <div className="relative flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/20">Risk:</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[8px] font-bold text-amber-400 uppercase tracking-wider">finance</span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[8px] font-bold text-purple-400 uppercase tracking-wider">brand</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            <ToolBadge tool="SQL" size="sm" />
            <ToolBadge tool="RAG" size="sm" />
          </div>
        </div>

        {/* Evidence */}
        <div className="relative space-y-2 mb-4">
          <span className="text-[8px] font-black uppercase tracking-widest text-white/25 block">Evidence</span>
          <div className="flex items-start gap-2 p-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
            <FileText className="w-3 h-3 text-indigo-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[8px] font-bold text-indigo-400 uppercase tracking-wider block">RAG — Return Policy §3.2</span>
              <span className="text-[11px] text-white/50 leading-snug">&ldquo;Electronics over $500: 30-day return window, full refund if item is unopened.&rdquo;</span>
            </div>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <AlertTriangle className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-[8px] font-bold text-blue-400 uppercase tracking-wider block">SQL — Order Facts</span>
              <span className="text-[11px] text-white/50 leading-snug">Order #1847 · Wireless Headphones Pro · $749.00 · Delivered 12 days ago</span>
            </div>
          </div>
        </div>

        {/* Draft Preview */}
        <div className="relative mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <span className="text-[8px] font-black uppercase tracking-widest text-white/25 block mb-2">Draft Preview</span>
          <p className="text-[11px] text-white/50 leading-relaxed italic">
            &ldquo;Dear Sarah, we&apos;ve reviewed your return request for the Wireless Headphones Pro (Order #1847). Based on our policy, you are eligible for a full refund of $749.00. We&apos;ve also added a $25 goodwill credit to your account...&rdquo;
          </p>
        </div>

        {/* Controls */}
        <div className="relative grid grid-cols-2 gap-3 mb-5">
          <div className="space-y-1.5">
            <label className="text-[8px] font-black uppercase tracking-widest text-white/25">Resolution</label>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/70 flex items-center justify-between">
              Full Refund
              <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[8px] font-black uppercase tracking-widest text-white/25">Goodwill ($)</label>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/70">
              25.00
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[8px] font-black uppercase tracking-widest text-white/25">Tone</label>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/70 flex items-center justify-between">
              Friendly
              <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[8px] font-black uppercase tracking-widest text-white/25">Return Instructions</label>
            <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white/70 flex items-center gap-2">
              <div className="w-4 h-4 rounded-md bg-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
              Included
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="relative flex gap-2">
          <button className="flex-1 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-[9px] font-black uppercase tracking-widest text-emerald-400 hover:bg-emerald-600/30 transition-all">
            Approve
          </button>
          <button className="flex-1 py-2.5 rounded-xl bg-amber-600/10 border border-amber-500/20 text-[9px] font-black uppercase tracking-widest text-amber-400 hover:bg-amber-600/20 transition-all">
            Request Changes
          </button>
          <button className="flex-1 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/30 hover:bg-white/[0.06] transition-all">
            Reject
          </button>
        </div>
      </div>
    </motion.div>
  );
}
