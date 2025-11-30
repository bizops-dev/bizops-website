import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

interface MethodologyReferenceProps {
  className?: string;
}

const levels = [
  {
    level: 1,
    label: 'Ad-Hoc',
    desc: 'Inisiatif reaktif, manual, dan tidak terkoordinasi.',
    color: 'bg-red-500',
  },
  {
    level: 2,
    label: 'Opportunistic',
    desc: 'Mulai ada proyek digital parsial (silo) tanpa strategi terpusat.',
    color: 'bg-orange-500',
  },
  {
    level: 3,
    label: 'Repeatable',
    desc: 'Proses terstandarisasi, dokumentasi jelas, strategi mulai terbentuk.',
    color: 'bg-yellow-500',
  },
  {
    level: 4,
    label: 'Managed',
    desc: 'Terintegrasi penuh, berbasis data, dan terukur secara kuantitatif.',
    color: 'bg-blue-500',
  },
  {
    level: 5,
    label: 'Optimized',
    desc: 'Inovasi berkelanjutan, adaptif, dan memimpin pasar (Disruptor).',
    color: 'bg-green-500',
  },
];

export const MethodologyReference: React.FC<MethodologyReferenceProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Framework Explanation */}
      <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary-400" />
          Standar & Metodologi
        </h4>
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">
          Assessment ini dikembangkan dengan mengadaptasi kerangka kerja standar industri global untuk memastikan akurasi dan relevansi:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-primary-500/10 rounded-full">
              <Layers className="w-3 h-3 text-primary-400" />
            </div>
            <div className="text-sm">
              <strong className="text-slate-200 block">TM Forum Digital Maturity Model (DMM)</strong>
              <span className="text-slate-500">Mencakup 5 dimensi holistik: Customer, Strategy, Technology, Operations, dan Culture.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 p-1 bg-primary-500/10 rounded-full">
              <TrendingUp className="w-3 h-3 text-primary-400" />
            </div>
            <div className="text-sm">
              <strong className="text-slate-200 block">CMMI (Capability Maturity Model Integration)</strong>
              <span className="text-slate-500">Digunakan untuk penjenjangan level kedewasaan proses dari tahap inisiasi hingga optimasi.</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Maturity Levels */}
      <div>
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary-400" />
          Tingkatan Maturity (Leveling)
        </h4>
        <div className="grid gap-3">
          {levels.map((lvl) => (
            <div key={lvl.level} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center font-bold text-white ${lvl.color}`}>
                {lvl.level}
              </div>
              <div>
                <div className="font-semibold text-slate-200 text-sm">{lvl.label}</div>
                <div className="text-xs text-slate-500">{lvl.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

