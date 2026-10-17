import React from 'react';
import { BarChart3 } from 'lucide-react';

export const StatsCard: React.FC = () => {
  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#13161C] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">
          At A Glance
        </span>
        <BarChart3 className="w-4 h-4 text-lime-600 dark:text-[#CCFF00]" />
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto py-1">
        <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] text-center">
          <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
            3+
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">
            Major Systems
          </div>
        </div>

        <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] text-center">
          <div className="text-xl font-bold font-mono text-amber-600 dark:text-[#F59E0B] tabular-nums">
            1
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">
            Hackathon Win
          </div>
        </div>

        <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] text-center">
          <div className="text-xl font-bold font-mono text-cyan-600 dark:text-[#00F2FE] tabular-nums">
            1
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">
            Cloud SWE Role
          </div>
        </div>

        <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] text-center">
          <div className="text-xl font-bold font-mono text-lime-600 dark:text-[#CCFF00] tabular-nums">
            2027
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase font-medium">
            Graduation
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-200/90 dark:border-[#1F2633] text-[11px] text-neutral-500 dark:text-neutral-400">
        Canara Engineering College
      </div>
    </div>
  );
};
