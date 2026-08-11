import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="w-full scroll-mt-36 py-36 sm:py-48 relative bg-black/30 border-t border-white/10 flex flex-col items-center">
      <div className="section-container experience-section-container">
        
        {/* Section Header */}
        <div className="section-heading experience-heading flex flex-col">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            Experiencia en la Industria & Academia
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            Desarrollo de software a medida, optimización de consultas SQL, análisis de datos y gestión de infraestructura web.
          </p>
        </div>

        {/* Cards Container with Flex Gap Separation and NO Left Blue Line */}
        <div className="experience-cards flex flex-col items-center gap-8 sm:gap-10 md:gap-12 mt-6">
          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group w-full"
            >
              {/* Card Container with Massive Internal Spacing */}
              <div className="experience-card apple-card card-padding glass-panel border border-white/15 group-hover:border-blue-500/50 transition-all duration-300 relative z-10">
                
                {/* Inner Safe Margin Container */}
                <div className="px-2 sm:px-4 py-1">
                  
                  {/* Header info with Briefcase Badge Icon */}
                  <div className="experience-card-header flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className="text-xs sm:text-sm font-sans card-badge-capsule bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold shrink-0 tracking-wide">
                            {item.badge}
                          </span>
                          <span className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                            {item.location}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        <h4 className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                          {item.company}
                        </h4>
                      </div>
                    </div>

                    <div className="experience-date-pill inline-flex items-center gap-2.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-mono text-slate-200 font-bold self-start md:self-auto shrink-0 shadow-md">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="experience-description text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Key Bullet Points */}
                  <div className="experience-bullets space-y-4">
                    {item.bulletPoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills with Massive Space Clearance */}
                  <div className="experience-stack border-t border-white/10 flex flex-wrap items-center gap-3 px-5 sm:px-8">
                    <span className="text-xs sm:text-sm font-mono text-slate-400 mr-2 font-semibold">Stack:</span>
                    {item.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="experience-stack-pill text-xs font-mono rounded-lg bg-white/5 text-slate-200 border border-white/10 hover:bg-blue-600/30 hover:text-blue-200 transition-colors font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
