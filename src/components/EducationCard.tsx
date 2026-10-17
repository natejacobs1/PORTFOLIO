import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../utils/portfolio-data';

export const EducationCard: React.FC = () => {
  return (
    <div
      id="education"
      className="relative group col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#141822] dark:to-[#0F131B] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_12px_40px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-lime-50 text-lime-600 border border-lime-200/80 dark:bg-[#161F12] dark:text-[#CCFF00] dark:border-[#2D4518]">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-500 dark:text-neutral-400">
              Academic Background
            </span>
            <h2 className="text-base font-bold text-neutral-900 dark:text-white">
              Education
            </h2>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-4">
          {EDUCATION_DATA.map((edu, index) => (
            <div
              key={index}
              className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] space-y-1.5 transition-all group-hover:border-neutral-300 dark:group-hover:border-[#2A3547]"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-lime-600 dark:text-[#CCFF00]" />
                  {edu.period}
                </span>
                <span className="font-bold text-lime-600 dark:text-[#CCFF00] text-[11px] font-mono">
                  {edu.scoreLabel}: {edu.score}
                </span>
              </div>

              <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-snug">
                {edu.institution}
              </h4>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                {edu.degree}
              </p>
              {edu.details && (
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="pt-3 border-t border-neutral-200/90 dark:border-[#1F2633] flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>CSE Undergraduate</span>
        </span>
        <span className="font-mono text-lime-600 dark:text-[#CCFF00]">Canara 2027</span>
      </div>
    </div>
  );
};
