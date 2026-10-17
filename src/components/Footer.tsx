import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-[#1F2633] mt-16 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind CSS.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-[#CCFF00] transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 dark:hover:text-[#00F2FE] transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-neutral-900 dark:hover:text-[#CCFF00] transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 dark:border-[#1F2633] dark:hover:bg-[#161B26] dark:text-neutral-400 dark:hover:text-[#CCFF00] transition-all ml-2"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
