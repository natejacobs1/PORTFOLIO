import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Bot, Map, Terminal, Layers } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryTheme = () => {
    switch (project.category) {
      case 'ai':
        return {
          icon: <Bot className="w-6 h-6 text-lime-600 dark:text-[#CCFF00]" />,
          iconBg: 'bg-lime-50 border-lime-200 dark:bg-[#161F12] dark:border-[#2D4518]',
          accentText: 'text-lime-600 dark:text-[#CCFF00]',
          bulletDot: 'bg-lime-500 dark:bg-[#CCFF00]',
        };
      case 'gis':
        return {
          icon: <Map className="w-6 h-6 text-cyan-600 dark:text-[#00F2FE]" />,
          iconBg: 'bg-cyan-50 border-cyan-200 dark:bg-[#0E1A22] dark:border-[#1A3845]',
          accentText: 'text-cyan-600 dark:text-[#00F2FE]',
          bulletDot: 'bg-cyan-500 dark:bg-[#00F2FE]',
        };
      default:
        return {
          icon: <Terminal className="w-6 h-6 text-amber-600 dark:text-[#F59E0B]" />,
          iconBg: 'bg-amber-50 border-amber-200 dark:bg-[#201A10] dark:border-[#3D3019]',
          accentText: 'text-amber-600 dark:text-[#F59E0B]',
          bulletDot: 'bg-amber-500 dark:bg-[#F59E0B]',
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border bg-white border-neutral-200 text-neutral-900 shadow-2xl dark:bg-[#12161E] dark:border-[#1F2633] dark:text-neutral-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-[#1C2230] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-3 rounded-2xl border ${theme.iconBg} shadow-sm`}>
            {theme.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-semibold text-neutral-500 dark:text-neutral-400 tracking-wider">
                Project Detail
              </span>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">· {project.year}</span>
            </div>
            <h2 id="modal-project-title" className="text-2xl font-bold text-neutral-900 dark:text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Key Resume Contributions */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-[#CCFF00]" />
            Key Achievements & Deliverables
          </h4>
          <div className="space-y-3">
            {project.bulletPoints.map((point, index) => (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-700 dark:bg-[#0E1117] dark:border-[#1F2633] dark:text-neutral-300 leading-relaxed"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-[#00F2FE]" />
              Architecture Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${theme.bulletDot} shrink-0`} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-[#161B26] dark:text-neutral-200 dark:border-[#263142]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-200 dark:border-[#1F2633] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-neutral-500">
            Extracted strictly from verified resume data
          </span>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300 dark:bg-[#161B26] dark:hover:bg-[#1E2535] dark:text-white dark:border-[#263142] transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] transition-all shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
