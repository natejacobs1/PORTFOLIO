import React from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

interface HeroCardProps {
  onContactClick: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onContactClick }) => {
  return (
    <div className="relative group col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl p-7 md:p-9 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#131722] dark:to-[#0F131A] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_12px_40px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      {/* Subtle ambient neon lime & cyan atmospheric glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-gradient-to-br from-[#CCFF00]/15 via-[#00F2FE]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#CCFF00]/25 group-hover:via-[#00F2FE]/15 transition-all duration-500" />
      
      {/* Top Header Section */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-[#E2FF66]">
            <span className="w-2 h-2 rounded-full bg-lime-500 dark:bg-[#CCFF00] shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
            <span>Available for Internships & Projects</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-lime-600 dark:text-[#CCFF00]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        <div className="pt-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 via-emerald-600 to-cyan-600 dark:from-[#CCFF00] dark:via-[#6EE7B7] dark:to-[#00F2FE]">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="mt-2 text-base sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {PERSONAL_INFO.role}
          </p>
        </div>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
          {PERSONAL_INFO.bio}
        </p>

        {/* Quick Resume Highlights */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200/90 dark:bg-[#161B26] dark:text-[#E2FF66] dark:border-[#263142]">
            <Terminal className="w-3 h-3 text-lime-600 dark:text-[#CCFF00]" />
            FOSS Hack 2025 Winner
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200/90 dark:bg-[#161B26] dark:text-[#67E8F9] dark:border-[#263142]">
            <Sparkles className="w-3 h-3 text-cyan-600 dark:text-[#00F2FE]" />
            Venu AI SWE Intern
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200/90 dark:bg-[#161B26] dark:text-neutral-300 dark:border-[#263142]">
            Canara Engineering College (2023–2027)
          </span>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="relative z-10 pt-6 mt-6 border-t border-neutral-200/90 dark:border-[#1F2633] flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm active:scale-95 transition-all shadow-md bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] dark:shadow-[0_0_25px_rgba(204,255,0,0.3)]"
        >
          <span>View Featured Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          type="button"
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 dark:text-neutral-300 dark:bg-[#161B26] dark:hover:bg-[#1E2535] dark:hover:text-white dark:border-[#263142] transition-all active:scale-95"
        >
          <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
};
