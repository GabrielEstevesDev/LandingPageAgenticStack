"use client";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <span className="text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.5em] mb-4">{label}</span>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">{title}</h2>
      {subtitle && (
        <p className="text-white/40 text-sm md:text-base mt-4 max-w-2xl leading-relaxed font-medium">{subtitle}</p>
      )}
    </div>
  );
}
