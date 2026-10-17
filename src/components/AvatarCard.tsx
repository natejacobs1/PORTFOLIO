import React, { useState, useRef } from 'react';
import { Camera, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const AvatarCard: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative group col-span-1 lg:col-span-1 row-span-1 rounded-3xl p-6 transition-all duration-300 border bg-white border-neutral-200 hover:border-lime-500/80 hover:shadow-[0_10px_30px_-10px_rgba(101,163,13,0.15)] dark:bg-gradient-to-br dark:from-[#12161E] dark:to-[#0F141D] dark:border-[#1F2633] dark:hover:border-[#CCFF00]/70 dark:hover:shadow-[0_10px_30px_-10px_rgba(204,255,0,0.2)] shadow-sm flex flex-col items-center justify-between overflow-hidden">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
        aria-label="Upload custom profile photo"
      />

      <div className="w-full flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold uppercase tracking-wider text-[11px] text-neutral-600 dark:text-neutral-400">Profile</span>
        {customPhoto ? (
          <button
            type="button"
            onClick={handleResetPhoto}
            title="Reset to default avatar"
            className="flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-[#CCFF00] transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        ) : (
          <span className="flex items-center gap-1 text-[11px] text-lime-600 dark:text-[#CCFF00] font-medium">
            <CheckCircle2 className="w-3 h-3" />
            <span>Active</span>
          </span>
        )}
      </div>

      {/* Avatar Container with Electric Lime + Cyan Glow Ring */}
      <div className="relative my-auto flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-[#CCFF00] via-[#2DD4BF] to-[#00F2FE] shadow-md group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(204,255,0,0.35)] transition-all duration-300">
          <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-950 flex items-center justify-center relative">
            {customPhoto ? (
              <img
                src={customPhoto}
                alt="Adarsh SK Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              /* Geometric Modern Developer Emblem with Lime-Cyan Duotone */
              <div className="w-full h-full bg-gradient-to-br from-[#0F131A] via-[#12161F] to-[#0B0D11] flex flex-col items-center justify-center text-white relative select-none">
                <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-[#00F2FE]">
                  SK
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#A3E635] font-mono mt-0.5">
                  Adarsh
                </span>
              </div>
            )}
            
            {/* Upload Hover Button Overlay */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Upload custom profile photo"
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-200 cursor-pointer text-xs"
            >
              <Camera className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-medium">Replace</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
          {PERSONAL_INFO.name}
        </p>
        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
          CSE '27 · Canara Engg.
        </p>
      </div>
    </div>
  );
};
