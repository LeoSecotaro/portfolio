import React from 'react';
import { ArrowUp, Code, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-14 bg-black border-t border-white/15 relative text-xs sm:text-sm text-slate-400 font-mono flex flex-col items-center">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Signature */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-bold text-white text-sm sm:text-base">
            Leonardo Secotaro Ianardi
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Ingeniero en Sistemas de Información (UTN)</span>
        </div>

        {/* Center: Location & Time */}
        <div className="flex items-center gap-2.5 text-slate-300">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Guaymallén, Mendoza, Argentina</span>
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full glass-pill hover:bg-white/15 text-slate-200 hover:text-white transition-colors flex items-center gap-2 cursor-pointer font-sans text-xs sm:text-sm font-semibold"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Volver arriba</span>
        </button>

      </div>
    </footer>
  );
}
