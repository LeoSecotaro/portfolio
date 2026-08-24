import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen, Wrench, X, ArrowRight } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

export default function EducationSection() {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedCourse(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <section id="educacion" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-visible flex flex-col items-center">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-heading education-heading flex flex-col max-w-3xl mx-auto">
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
        <div className="education-grid grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => item.details && setSelectedCourse(item)}
              onKeyDown={(event) => {
                if (item.details && (event.key === 'Enter' || event.key === ' ')) {
                  event.preventDefault();
                  setSelectedCourse(item);
                }
              }}
              role={item.details ? 'button' : undefined}
              tabIndex={item.details ? 0 : undefined}
              aria-label={item.details ? `${t('common.viewDetails')}: ${item.title}` : undefined}
              className={`education-card apple-card card-padding glass-panel border border-white/15 flex flex-col justify-between group hover:border-blue-500/50 ${item.details ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-black' : ''}`}
            >
              <div>
                <div className="education-card-header flex items-center justify-between px-1">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {index === 0 ? <GraduationCap className="w-7 h-7" /> : <Award className="w-7 h-7" />}
                  </div>
                  <span className="education-badge text-xs sm:text-sm font-mono rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="education-card-title text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors px-1">
                  {item.title}
                </h3>
                <p className="education-card-institution text-sm font-semibold text-blue-400 px-1">
                  {item.institution}
                </p>

                <p className="education-card-description text-sm sm:text-base text-slate-200 font-normal px-1">
                  {item.description}
                </p>

                {item.details && (
                  <span
                    className="education-details-button flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/30 font-semibold text-blue-300 transition-colors hover:bg-blue-500/20 hover:text-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {t('common.viewDetails')}
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </span>
                )}
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

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="course-details-title"
              className="education-details-modal w-full max-w-4xl rounded-3xl border border-white/20 bg-slate-950 shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="education-details-modal-header flex items-start justify-between gap-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">TryHackMe</span>
                  <h3 id="course-details-title" className="mt-2 text-2xl sm:text-3xl font-bold text-white">{selectedCourse.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  aria-label={t('common.closePreview')}
                  className="education-details-close rounded-xl border border-white/10 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="education-details-content grid gap-10 lg:grid-cols-2">
                <div>
                  <h4 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-white"><Wrench className="w-5 h-5 text-blue-400" />{t('common.courseTools')}</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedCourse.details.tools.map((tool) => (
                      <span key={tool} className="education-tool-pill rounded-xl border border-blue-500/30 bg-blue-500/10 text-xs font-mono text-blue-200">{tool}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-white"><BookOpen className="w-5 h-5 text-emerald-400" />{t('common.courseLearning')}</h4>
                  <ul className="space-y-5">
                    {selectedCourse.details.learning.map((topic) => (
                      <li key={topic} className="course-content-item flex gap-3 text-sm leading-8 text-slate-200"><CheckCircle2 className="course-content-tick w-4 h-4 shrink-0 text-emerald-400" />{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
