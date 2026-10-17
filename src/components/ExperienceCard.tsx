import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCE_DATA } from '../utils/portfolio-data';

export const ExperienceCard: React.FC = () => {
  const exp = EXPERIENCE_DATA[0];

  return (
    <div
      id="experience"
      className="relative group col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl p-7 transition-all duration-300 border bg-white border-neutral-200 hover:border-cyan-500/80 hover:shadow-[0_10px_30px_-10px_rgba(8,145,178,0.15)] dark:bg-gradient-to-br dark:from-[#111722] dark:via-[#12161E] dark:to-[#0D121B] dark:border-[#1F2633] dark:hover:border-[#00F2FE]/70 dark:hover:shadow-[0_10px_35px_-10px_rgba(0,242,254,0.18)] shadow-sm flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950/60 dark:text-[#00F2FE] border border-cyan-200/60 dark:border-cyan-800/40">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-500 dark:text-neutral-400">
                Experience
              </span>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                {exp.role} · <span className="text-cyan-600 dark:text-[#00F2FE]">{exp.company}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
              <span>{exp.period}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-[#00F2FE]" />
              <span>{exp.location}</span>
            </span>
          </div>
        </div>

        {/* Resume Bullet Points */}
        <div className="space-y-2 mt-4">
          {exp.bulletPoints.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <CheckCircle className="w-4 h-4 text-lime-600 dark:text-[#CCFF00] shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div className="pt-4 mt-4 border-t border-neutral-200/90 dark:border-[#1F2633] flex items-center gap-1.5 flex-wrap">
        <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 mr-1">
          Stack:
        </span>
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-medium px-2.5 py-0.5 rounded-lg bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-[#161B26] dark:text-neutral-200 dark:border-[#283244] hover:dark:border-[#00F2FE]/40 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
