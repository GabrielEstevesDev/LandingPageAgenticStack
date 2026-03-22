"use client";

import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export default function LegalSection() {
  return (
    <section id="legal" className="section-fixed border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="content-density-fix max-w-5xl"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500">
            <Info className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-black tracking-tighter uppercase italic">Mentions Légales</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-[11px] leading-relaxed text-white/40 uppercase tracking-wider font-bold">
          <div className="space-y-8 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <div>
              <h3 className="text-blue-500 mb-2">1. Éditeur du Site</h3>
              <p>Responsable de publication : Gabriel ESTEVES</p>
              <p>Siège social : Paris, France</p>
              <p>Contact : contact@agenticstack.fr</p>
            </div>
            <div>
              <h3 className="text-blue-500 mb-2">2. Informations Entreprise</h3>
              <p>Statut : Entrepreneur Individuel (EI)</p>
              <p>SIRET : en cours d&apos;immatriculation</p>
              <p>Localisation : Paris, France</p>
            </div>
          </div>

          <div className="space-y-8 bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <div>
              <h3 className="text-blue-500 mb-2">3. Hébergement</h3>
              <p>Prestataire : Vercel Inc.</p>
              <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            </div>
            <div>
              <h3 className="text-blue-500 mb-2">4. Propriété & Données</h3>
              <p>Propriété intellectuelle : Le code et les designs sont la propriété exclusive de Agentic Stack.</p>
              <p>RGPD : Les données collectées via le formulaire sont utilisées uniquement pour la gestion de la relation client.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-[9px] font-black text-white/10 uppercase tracking-[1em]">
          PRECISION ENGINEERED // PARIS FR // © 2026
        </div>
      </motion.div>
    </section>
  );
}
