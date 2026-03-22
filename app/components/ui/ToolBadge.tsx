"use client";

import { Database, Search, Globe, Code, Shield } from 'lucide-react';

type ToolType = 'SQL' | 'RAG' | 'WEB' | 'PYTHON_CHART' | 'HITL';

const toolConfig: Record<ToolType, { color: string; bg: string; border: string; glow: string; icon: React.ElementType }> = {
  SQL: { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', glow: 'shadow-[0_0_8px_rgba(59,130,246,0.15)]', icon: Database },
  RAG: { color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', glow: 'shadow-[0_0_8px_rgba(99,102,241,0.15)]', icon: Search },
  WEB: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'shadow-[0_0_8px_rgba(16,185,129,0.15)]', icon: Globe },
  PYTHON_CHART: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', glow: 'shadow-[0_0_8px_rgba(245,158,11,0.15)]', icon: Code },
  HITL: { color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', glow: 'shadow-[0_0_8px_rgba(244,63,94,0.15)]', icon: Shield },
};

interface ToolBadgeProps {
  tool: ToolType;
  size?: 'sm' | 'md';
}

export default function ToolBadge({ tool, size = 'sm' }: ToolBadgeProps) {
  const config = toolConfig[tool];
  const Icon = config.icon;
  const label = tool === 'PYTHON_CHART' ? 'CHARTS' : tool;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 rounded-full border font-mono font-bold uppercase tracking-wider ${config.color} ${config.bg} ${config.border} ${config.glow} ${
      size === 'sm' ? 'py-0.5 text-[8px]' : 'py-1 text-[9px]'
    }`}>
      <Icon className={size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3'} />
      {label}
    </span>
  );
}

export type { ToolType };
