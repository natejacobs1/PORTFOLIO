import React from 'react';
import { ExternalLink, Layers, Bot, Map, Terminal, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, className = '' }) => {
  const getThemeStyling = () => {
    switch (project.category) {
      case 'ai':
        return {
          icon: <Bot className="w-5 h-5 text-lime-600 dark:text-[#CCFF00]" />,
          iconBg: 'bg-lime-50 border-lime-200 dark:bg-[#161F12] dark:border-[#2D4518]',
          glow: 'hover:border-lime-500/80 hover:shadow-[0_10px_35px_-10px_rgba(101,163,13,0.18)] dark:hover:border-[#CCFF00]/80 dark:hover:shadow-[0_12px_40px_-10px_rgba(204,255,0,0.2)]',
          metricColor: 'text-lime-600 dark:text-[#CCFF00]',
          bgGradient: 'dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#13191F] dark:to-[#0F1418]',
          bulletDot: 'bg-lime-500 dark:bg-[#CCFF00]',
          titleHover: 'group-hover:text-lime-600 dark:group-hover:text-[#CCFF00]',
        };
      case 'gis':
        return {
          icon: <Map className="w-5 h-5 text-cyan-600 dark:text-[#00F2FE]" />,
          iconBg: 'bg-cyan-50 border-cyan-200 dark:bg-[#0E1A22] dark:border-[#1A3845]',
          glow: 'hover:border-cyan-500/80 hover:shadow-[0_10px_35px_-10px_rgba(8,145,178,0.18)] dark:hover:border-[#00F2FE]/80 dark:hover:shadow-[0_12px_40px_-10px_rgba(0,242,254,0.2)]',
          metricColor: 'text-cyan-600 dark:text-[#00F2FE]',
          bgGradient: 'dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#111A23] dark:to-[#0D141C]',
          bulletDot: 'bg-cyan-500 dark:bg-[#00F2FE]',
          titleHover: 'group-hover:text-cyan-600 dark:group-hover:text-[#00F2FE]',
        };
      default:
        return {
          icon: <Terminal className="w-5 h-5 text-amber-600 dark:text-[#F59E0B]" />,
          iconBg: 'bg-amber-50 border-amber-200 dark:bg-[#1E1911] dark:border-[#423318]',
          glow: 'hover:border-amber-500/80 hover:shadow-[0_10px_35px_-10px_rgba(217,119,6,0.18)] dark:hover:border-[#F59E0B]/80 dark:hover:shadow-[0_12px_40px_-10px_rgba(245,158,11,0.2)]',
          metricColor: 'text-amber-600 dark:text-[#F59E0B]',
          bgGradient: 'dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#181617] dark:to-[#111014]',
          bulletDot: 'bg-amber-500 dark:bg-[#F59E0B]',
          titleHover: 'group-hover:text-amber-600 dark:group-hover:text-[#F59E0B]',
        };
    }
  };

  const style = getThemeStyling();

  return (
    <div
      className={`relative group rounded-3xl p-7 transition-all duration-300 border bg-white border-neutral-200 dark:border-[#1F2633] ${style.bgGradient} ${style.glow} shadow-sm flex flex-col justify-between overflow-hidden ${className}`}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl border ${style.iconBg} group-hover:scale-105 transition-transform shadow-sm`}>
              {style.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-500 dark:text-neutral-400">
                  Featured Project
                </span>
                <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                  · {project.year}
                </span>
              </div>
              <h3 className={`text-xl font-bold text-neutral-900 dark:text-white ${style.titleHover} transition-colors`}>
                {project.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.title}`}
            className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-[#1E2535] transition-all border border-transparent hover:border-neutral-300 dark:hover:border-[#2C374D]"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium mb-3">
          {project.tagline}
        </p>

        {/* Resume Bullet Highlights */}
        <ul className="space-y-2 mb-4">
          {project.bulletPoints.map((point, i) => (
            <li
              key={i}
              className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${style.bulletDot} mt-1.5 shrink-0`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Tech stack and action button */}
      <div className="pt-4 border-t border-neutral-200/90 dark:border-[#1F2633]">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-[#161B26] dark:text-neutral-300 dark:border-[#263142] hover:dark:border-[#CCFF00]/40 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200 dark:bg-[#161B26] dark:text-neutral-400 dark:border-transparent">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className={`text-xs font-semibold ${style.metricColor} flex items-center gap-1.5`}>
            <Layers className="w-3.5 h-3.5" />
            <span>{project.metrics || 'Production System'}</span>
          </span>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-xs font-bold inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white group-hover:underline underline-offset-4"
          >
            <span>Architecture & Details</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
