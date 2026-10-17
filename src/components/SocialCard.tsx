import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const SocialCard: React.FC = () => {
  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#0F141D] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">
          Social Links
        </span>
        <span className="text-[11px] text-neutral-400 font-mono">Connect</span>
      </div>

      <div className="my-auto py-2 space-y-2">
        {/* GitHub link */}
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-lime-500 hover:bg-neutral-100 dark:bg-[#0E1117] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/60 dark:hover:bg-[#161B26] transition-all text-xs text-neutral-800 dark:text-neutral-300 font-medium group/link"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-current text-neutral-900 dark:text-white" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-500 group-hover/link:text-neutral-900 dark:text-neutral-400 dark:group-hover/link:text-[#CCFF00]">
            <span>@{PERSONAL_INFO.githubHandle}</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </a>

        {/* LinkedIn link */}
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-cyan-500 hover:bg-neutral-100 dark:bg-[#0E1117] dark:border-[#1F2633] dark:hover:border-[#00F2FE]/60 dark:hover:bg-[#161B26] transition-all text-xs text-neutral-800 dark:text-neutral-300 font-medium group/link"
        >
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-500 group-hover/link:text-neutral-900 dark:text-neutral-400 dark:group-hover/link:text-[#00F2FE]">
            <span>in/{PERSONAL_INFO.linkedinHandle}</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </a>
      </div>

      <div className="pt-2 border-t border-neutral-200/90 dark:border-[#1F2633] text-[11px] text-neutral-500 dark:text-neutral-400">
        Direct profile handles from resume
      </div>
    </div>
  );
};
