"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';

const tabs = [
  { id: 'Hero', label: 'Home' },
  { id: 'Process', label: 'Process' },
  { id: 'Hitl', label: 'HITL' },
  { id: 'Pricing', label: 'Pricing' },
  { id: 'Contact', label: 'Contact' },
  { id: 'Legal', label: 'Mentions' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] glass-nav px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-black tracking-tighter text-white">AGENTIC STACK</span>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-0.5 relative bg-white/5 p-1 rounded-full border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`relative px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.15em] transition-colors z-10 whitespace-nowrap ${
              activeTab === tab.id ? 'text-white' : 'text-white/40 hover:text-white/60'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="nav-glow"
                className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile toggle */}
      <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col gap-1 lg:hidden"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${
                activeTab === tab.id ? 'text-white bg-blue-600/10 border border-blue-500/20' : 'text-white/40 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      )}

      <a
        href="https://agenticstack.store/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex btn-primary-cyber !py-2 !px-5 !text-[9px]"
      >
        Try Live Demo
      </a>
    </nav>
  );
}
