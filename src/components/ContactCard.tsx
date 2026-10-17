import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const ContactCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="contact"
      className="relative group col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl p-7 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_35px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:via-[#131920] dark:to-[#0F1419] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_12px_40px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col justify-between overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-xl bg-lime-50 text-lime-600 border border-lime-200/80 dark:bg-[#161F12] dark:text-[#CCFF00] dark:border-[#2D4518]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-500 dark:text-neutral-400">
                Get In Touch
              </span>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                Let's collaborate & build together
              </h3>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-lime-600 dark:text-[#CCFF00]" />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4">
          Interested in software engineering internships, research collaborations in GIS / AI, or open-source initiatives? Drop a note directly.
        </p>
      </div>

      {/* Interactive Action Bar */}
      <div className="pt-3 border-t border-neutral-200/90 dark:border-[#1F2633] flex flex-wrap items-center justify-between gap-3">
        {/* Email Display with Copy */}
        <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 dark:bg-[#0E1117] dark:border-[#1F2633] px-3.5 py-2 rounded-xl text-xs font-mono text-neutral-800 dark:text-neutral-200">
          <span className="select-all">{PERSONAL_INFO.email}</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="p-1 rounded-md text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-[#CCFF00] dark:hover:bg-[#1C2331] transition-colors"
          >
            {copied ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-lime-600 dark:text-[#CCFF00] font-sans font-bold">
                <Check className="w-3.5 h-3.5" />
                Copied!
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Send Email Action Button */}
        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl active:scale-95 transition-all shadow-sm bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] dark:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send Message</span>
        </a>
      </div>
    </div>
  );
};
