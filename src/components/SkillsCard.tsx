import React, { useState } from 'react';
import { Cpu, Code2, Globe, Database, Cloud, Wrench } from 'lucide-react';
import { SKILLS_DATA, filterSkills } from '../utils/portfolio-data';
import { SkillCategory } from '../types/portfolio';

const CATEGORIES: { id: SkillCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'all', label: 'All', icon: Cpu },
  { id: 'languages', label: 'Languages', icon: Code2 },
  { id: 'web', label: 'Web Tech', icon: Globe },
  { id: 'gis', label: 'GIS & Data', icon: Database },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

export const SkillsCard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const filteredSkills = filterSkills(SKILLS_DATA, activeCategory);

  return (
    <div
      id="skills"
      className="relative group col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl p-7 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_35px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#131821] dark:to-[#0F141C] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_12px_40px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-lime-50 text-lime-600 border border-lime-200/80 dark:bg-[#161F12] dark:text-[#CCFF00] dark:border-[#2D4518]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-500 dark:text-neutral-400">
                Core Competencies
              </span>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                Skills & Technologies
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 dark:bg-[#161B26] dark:text-[#E2FF66] dark:border-[#263142]">
            {filteredSkills.length} skills listed
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-neutral-100 border border-neutral-200/90 dark:bg-[#0E1117] dark:border-[#1F2633] overflow-x-auto mb-5 scrollbar-none" role="tablist" aria-label="Skill categories">
          {CATEGORIES.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeCategory === id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === id
                  ? 'bg-neutral-950 text-[#CCFF00] shadow-sm dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                  : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Skills Chips Grid */}
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 hover:border-lime-500 hover:bg-neutral-50 dark:bg-[#161B26] dark:text-neutral-200 dark:border-[#263142] dark:hover:border-[#CCFF00]/60 dark:hover:bg-[#1A2130] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 dark:bg-[#CCFF00]" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Domain Summary Footnote */}
      <div className="pt-4 mt-5 border-t border-neutral-200/90 dark:border-[#1F2633] flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>Verified from academic & project engineering</span>
        <span className="font-mono text-lime-600 dark:text-[#CCFF00] font-semibold">Full-Stack · GIS · Cloud</span>
      </div>
    </div>
  );
};
