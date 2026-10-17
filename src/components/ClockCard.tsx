import React, { useState, useEffect } from 'react';
import { Sun, Moon, Compass } from 'lucide-react';
import { getFormattedIST } from '../utils/portfolio-data';

export const ClockCard: React.FC = () => {
  const [istData, setIstData] = useState(() => getFormattedIST());

  useEffect(() => {
    const timer = setInterval(() => {
      setIstData(getFormattedIST());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-cyan-500/80 hover:shadow-[0_10px_30px_-10px_rgba(8,145,178,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#0E1520] dark:border-[#1F2633] dark:hover:border-[#00F2FE]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(0,242,254,0.18)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">Time & Location</span>
        <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <Compass className="w-3 h-3 text-cyan-600 dark:text-[#00F2FE]" />
          <span>IST (UTC+5:30)</span>
        </span>
      </div>

      <div className="my-auto py-2">
        <div className="flex items-center gap-2">
          {istData.isDaytime ? (
            <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400 shrink-0" />
          ) : (
            <Moon className="w-5 h-5 text-cyan-500 dark:text-[#00F2FE] shrink-0" />
          )}
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-neutral-900 dark:text-white tabular-nums">
            {istData.timeString}
          </span>
        </div>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          {istData.dateString}
        </p>
      </div>

      <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 pt-2 border-t border-neutral-200/90 dark:border-[#1F2633]">
        <span>Karnataka, India</span>
        <span className="font-mono text-cyan-700 dark:text-[#00F2FE]/90">12.91°N, 74.85°E</span>
      </div>
    </div>
  );
};
