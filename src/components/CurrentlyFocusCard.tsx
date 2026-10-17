import React from 'react';
import { Target, Sparkles } from 'lucide-react';

export const CurrentlyFocusCard: React.FC = () => {
  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#0F1418] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">
          Current Focus
        </span>
        <Target className="w-4 h-4 text-lime-600 dark:text-[#CCFF00]" />
      </div>

      <div className="my-auto py-2 space-y-2">
        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-[#00F2FE] mt-1.5 shrink-0" />
          <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
            <span className="font-semibold text-neutral-900 dark:text-white">Web GIS & Spatial Telemetry:</span> 10-factor Landslide Conditioning Factor (LCF) maps.
          </p>
        </div>

        <div className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500 dark:bg-[#CCFF00] mt-1.5 shrink-0" />
          <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-snug">
            <span className="font-semibold text-neutral-900 dark:text-white">Conversational AI:</span> Gemini API board evaluation integration.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-200/90 dark:border-[#1F2633] flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1 text-lime-600 dark:text-[#CCFF00] font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>Active R&D</span>
        </span>
        <span className="font-mono text-neutral-500">2026</span>
      </div>
    </div>
  );
};
