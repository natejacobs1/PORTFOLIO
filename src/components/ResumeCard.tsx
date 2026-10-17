import React from 'react';
import { FileText, Eye } from 'lucide-react';

interface ResumeCardProps {
  onOpenResume: () => void;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({ onOpenResume }) => {
  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#0F1419] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">
          Curriculum Vitae
        </span>
        <FileText className="w-4 h-4 text-lime-600 dark:text-[#CCFF00]" />
      </div>

      <div className="my-auto py-2">
        <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
          Complete Resume
        </h4>
        <p className="text-[11px] text-neutral-600 dark:text-neutral-300 mt-0.5">
          Print-ready format with full education, projects, skills & experience.
        </p>
      </div>

      <div className="pt-2 border-t border-neutral-200/90 dark:border-[#1F2633]">
        <button
          type="button"
          onClick={onOpenResume}
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold active:scale-95 transition-all shadow-sm bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] dark:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View / Print Resume</span>
        </button>
      </div>
    </div>
  );
};
