import React from 'react';
import { motion } from 'framer-motion';
import { Code2, DatabaseZap, ServerCog, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { keyPillars } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  DatabaseZap: DatabaseZap,
  ServerCog: ServerCog,
  ShieldCheck: ShieldCheck
};

export default function MetricHighlights() {
  return (
    <section className="w-full py-36 sm:py-48 relative bg-black/40 border-y border-white/10 flex flex-col items-center">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-24 sm:mb-28">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            Pilares Tecnológicos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            Soluciones de extremo a extremo con precisión de ingeniería
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            Especialización práctica articulando desde la infraestructura de redes y seguridad hasta pipelines de IA generativa y frontends interactivos.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10">
          {keyPillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Code2;
            const tags = pillar.badge ? pillar.badge.split('·') : [];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="apple-card card-padding glass-panel border border-white/15 flex flex-col justify-between group hover:border-blue-500/50 relative overflow-hidden"
              >
                <div className="px-1 py-1 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Bar inside Pillar Card */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-slate-400 group-hover:text-blue-400 font-bold pr-2 pt-1">
                        {pillar.id}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-blue-300 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Badge Footer: Individual pill tags wrapping cleanly without clipping */}
                  <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-2 px-1 pb-1">
                    {tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[11px] sm:text-xs font-mono text-blue-300 bg-blue-500/15 px-3 py-1.5 rounded-lg border border-blue-500/30 font-medium whitespace-nowrap"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
