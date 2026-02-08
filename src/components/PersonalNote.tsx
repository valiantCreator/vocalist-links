'use client';

import { useState } from 'react';
import { Mail, X } from 'lucide-react';

interface PersonalNoteProps {
  note?: string;
  recipient: string;
}

export function PersonalNote({ note, recipient }: PersonalNoteProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!note) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative mt-4 flex items-center space-x-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 active:scale-95"
      >
        <Mail className="h-4 w-4 text-pink-400" />
        <span>Read Note</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Card */}
          <div 
            className="relative w-full max-w-lg transform overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="space-y-4 text-center md:space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-pink-400">
                A Note for {recipient}
              </h3>
              
              <div className="relative">
                {/* Decorative Quotes? Optional. keeping it simple first. */}
                <p className="font-[family-name:var(--font-caveat)] text-lg leading-snug whitespace-pre-wrap text-white/90 md:text-2xl md:leading-loose">
                  {note}
                </p>
              </div>

              <p className="text-xs uppercase tracking-widest text-white/30">
                With Love
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
