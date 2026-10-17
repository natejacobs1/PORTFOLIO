import React from 'react';
import { Trophy, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../utils/portfolio-data';

export const AchievementsCard: React.FC = () => {
  const hackathon = ACHIEVEMENTS_DATA[0];
  const cert = ACHIEVEMENTS_DATA[1];

  return (
    <div className="relative group col-span-1 md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-amber-500/80 hover:shadow-[0_10px_30px_-10px_rgba(217,119,6,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#171410] dark:border-[#1F2633] dark:hover:border-[#F59E0B]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">
          Honors & Certs
        </span>
        <Trophy className="w-4 h-4 text-amber-500 dark:text-[#F59E0B]" />
      </div>

      <div className="my-auto py-2 space-y-2.5">
        {/* Hackathon Achievement */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/80 dark:bg-[#201A10] dark:text-[#F59E0B] dark:border-[#3D3019] mt-0.5 shrink-0">
            <Trophy className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-snug">
              {hackathon.title}
            </h4>
            <p className="text-[11px] text-amber-700 dark:text-[#FBBF24] font-bold font-mono">
              {hackathon.award} · Team Fulgur Code
            </p>
          </div>
        </div>

        {/* GitHub Foundations Certification */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-200/80 dark:bg-[#0E1A22] dark:text-[#00F2FE] dark:border-[#1A3845] mt-0.5 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-snug">
              {cert.title}
            </h4>
            <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
              DevOps, GitHub Actions & Workflows
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-200/90 dark:border-[#1F2633] flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1 text-lime-600 dark:text-[#CCFF00] font-semibold">
          <CheckCircle2 className="w-3 h-3" />
          <span>Verified Credentials</span>
        </span>
        <span className="font-mono text-neutral-500">2025</span>
      </div>
    </div>
  );
};
