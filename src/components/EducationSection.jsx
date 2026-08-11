import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, Calendar, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

export default function EducationSection() {
  const { t } = useLanguage();
  return (
    <section id="educacion" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-hidden flex flex-col items-center">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-24 sm:mb-28">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            {t('section.educationEyebrow')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            {t('section.educationTitle')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            {t('section.educationDescription')}
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="education-card apple-card card-padding glass-panel border border-white/15 flex flex-col justify-between group hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6 px-1">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {index === 0 ? <GraduationCap className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                  </div>
                  <span className="education-badge text-xs sm:text-sm font-mono rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors px-1">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-blue-400 mb-4 px-1">
                  {item.institution}
                </p>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal px-1">
                  {item.description}
                </p>
              </div>

              <div className="education-card-footer border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-300 px-1">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  {item.period}
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
