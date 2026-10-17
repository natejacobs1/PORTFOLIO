import React from 'react';
import { Moon, Sun, FileText, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../utils/portfolio-data';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 bg-white/85 border-neutral-200/90 dark:bg-[#0B0D10]/85 dark:border-[#1F2633]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-neutral-950 dark:text-white whitespace-nowrap shrink-0 hover:text-lime-600 dark:hover:text-[#CCFF00] transition-colors flex items-center gap-1.5"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime-600 dark:bg-[#CCFF00] inline-block" />
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400" aria-label="Main Navigation">
          <a
            href="#projects"
            className="hover:text-neutral-950 dark:hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-neutral-950 dark:hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-neutral-950 dark:hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#education"
            className="hover:text-neutral-950 dark:hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0"
          >
            Education
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-950 dark:hover:text-[#CCFF00] transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions (Theme toggle + Resume CTA) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2.5 rounded-xl border transition-colors text-neutral-700 border-neutral-200 hover:bg-neutral-100 dark:text-neutral-300 dark:border-[#1F2633] dark:hover:bg-[#161B26]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl active:scale-95 transition-all shadow-sm whitespace-nowrap shrink-0 bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] dark:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </button>
        </div>
      </div>
    </header>
  );
};
