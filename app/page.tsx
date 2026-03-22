"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import HITLShowcaseSection from './components/HITLShowcaseSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import LegalSection from './components/LegalSection';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="snap-wrapper bg-[#030303]">
      {/* Loading curtain */}
      <AnimatePresence>
        {loading && (
          <motion.div key="curtain" className="fixed inset-0 z-[1000] flex" exit={{ opacity: 0 }}>
            <motion.div initial={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 1.2, ease: [0.8, 0, 0.2, 1] }} className="w-1/2 h-full bg-[#030303] border-r border-white/5" />
            <div className="energy-flash" />
            <motion.div initial={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 1.2, ease: [0.8, 0, 0.2, 1] }} className="w-1/2 h-full bg-[#030303] border-l border-white/5" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-40 z-0" />
      <div className="scanline z-[250]" />
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-[0.08] z-0 overflow-hidden">
        <svg width="100%" height="200" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
          <path d="M0 100 H100 L110 80 L120 120 L130 50 L140 150 L150 100 H200 L210 90 L220 110 L230 100 H300 L310 80 L320 120 L330 50 L340 150 L350 100 H400 L410 80 L420 120 L430 50 L440 150 L450 100 H500 L510 90 L520 110 L530 100 H600 L610 80 L620 120 L630 50 L640 150 L650 100 H700 L710 90 L720 110 L730 100 H800 L810 80 L820 120 L830 50 L840 150 L850 100 H1000" stroke="#3b82f6" strokeWidth="1.2" className="ecg-line" />
        </svg>
      </div>

      <Navbar />

      <HeroSection />
      <ProcessSection />
      <HITLShowcaseSection />
      <PricingSection />
      <ContactSection />
      <LegalSection />
    </div>
  );
}
