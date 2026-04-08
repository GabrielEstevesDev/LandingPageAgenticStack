"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { id: 'hero',     label: t.navbar.home },
    { id: 'process',  label: t.navbar.process },
    { id: 'usecases', label: t.navbar.usecases },
    { id: 'pricing',  label: t.navbar.pricing },
    { id: 'faq',      label: t.navbar.faq },
    { id: 'contact',  label: t.navbar.contact },
    { id: 'legal',    label: t.navbar.legal },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] glass-nav px-4 lg:px-8 xl:px-12 py-3 lg:py-4 flex items-center justify-between gap-3">

      {/* Brand */}
      <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0">
        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <Activity className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
        </div>
        <span className="text-base xl:text-xl font-black tracking-tighter text-white">{t.navbar.brand}</span>
      </div>

      {/* Desktop pill nav — scrollable on lg, full on xl */}
      <div className="hidden lg:flex flex-1 justify-center min-w-0">
        <div className="flex items-center gap-0.5 relative bg-white/5 p-1 rounded-full border border-white/5 overflow-x-auto scrollbar-hide max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-[8px] xl:text-[9px] font-black uppercase tracking-[0.12em] xl:tracking-[0.15em] transition-colors z-10 whitespace-nowrap flex-shrink-0 cursor-pointer ${
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
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Language toggle — desktop */}
        <button
          onClick={toggleLang}
          className="hidden sm:flex items-center gap-1 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-[8px] xl:text-[9px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-all cursor-pointer"
        >
          <span className={lang === 'fr' ? 'text-blue-400' : 'text-white/30'}>FR</span>
          <span className="text-white/15">/</span>
          <span className={lang === 'en' ? 'text-blue-400' : 'text-white/30'}>EN</span>
        </button>

        {/* Demo CTA — hidden on mobile to save space */}
        <a
          href="https://agenticstack.store/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex btn-primary-cyber !py-1.5 xl:!py-2 !px-4 xl:!px-5 !text-[8px] xl:!text-[9px] cursor-pointer"
        >
          {t.navbar.demo}
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/60 hover:text-white cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

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
              className={`text-left px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'text-white bg-blue-600/10 border border-blue-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}

          {/* Language + Demo in mobile drawer */}
          <div className="flex items-center gap-3 px-4 pt-3 mt-1 border-t border-white/5">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 cursor-pointer"
            >
              <span className={lang === 'fr' ? 'text-blue-400' : 'text-white/30'}>FR</span>
              <span className="text-white/15">/</span>
              <span className={lang === 'en' ? 'text-blue-400' : 'text-white/30'}>EN</span>
            </button>
            <a
              href="https://agenticstack.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-cyber !py-2 !px-5 !text-[9px] cursor-pointer"
            >
              {t.navbar.demo}
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
