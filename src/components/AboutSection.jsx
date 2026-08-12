import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, CheckCircle, Globe, Lightbulb, 
  MapPin, Languages, Award, Sparkles 
} from 'lucide-react';
import { personalDetails, languages, softSkills } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('resumen');

  return (
    <section id="perfil" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-hidden flex flex-col items-center">
      
      {/* Background glow */}
      <div className="glow-orb top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            {t('section.aboutEyebrow')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            {t('section.aboutTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            {t('section.aboutDescription')}
          </p>
        </div>

        {/* Tabs Bar - Guaranteed Massive Separation via selector-spacing */}
        <div className="w-full flex justify-center selector-spacing">
          <div className="selector-bar inline-flex rounded-full glass-panel border border-white/25 flex-wrap justify-center shadow-2xl">
            {[
              { id: 'resumen', label: t('common.general') },
              { id: 'filosofia', label: t('common.philosophy') },
              { id: 'idiomas', label: t('common.languages') },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`selector-pill relative text-base sm:text-lg font-extrabold rounded-full transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAboutPill"
                      className="selector-active-pill absolute inset-y-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 border border-blue-300/60 rounded-full shadow-2xl shadow-blue-500/60"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 px-2 tracking-wide">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 sm:mt-12"
        >
          {activeTab === 'resumen' && (
            <>
              <div className="about-summary-card lg:col-span-12 glass-panel rounded-3xl border border-white/15">
                <div className="about-summary-content">
                  <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                    <User className="w-6 h-6 text-blue-400" />
                    <span>{t('section.aboutEyebrow')}</span>
                  </h3>
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                    {language === 'en' ? personalDetails.summaryEn : personalDetails.summary}
                  </p>
                  <div className="about-summary-subcards grid grid-cols-1 sm:grid-cols-2">
                    <div className="about-subcard rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[160px]">
                      <div>
                        <span className="text-xs font-mono text-blue-400 font-bold block mb-1.5 uppercase">{t('common.university')}</span>
                        <span className="text-base font-bold text-white block mb-1 leading-snug">Universidad Tecnológica Nacional (UTN)</span>
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-white/10">
                        <span className="text-xs text-slate-300 block font-medium">Ingeniería en Sistemas de Información</span>
                        <span className="text-xs font-mono text-blue-400 font-semibold block mt-1">(2021 — 2026)</span>
                      </div>
                    </div>

                    <div className="about-subcard rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[160px]">
                      <div>
                        <span className="text-xs font-mono text-emerald-400 font-bold block mb-1.5 uppercase">Enfoque profesional</span>
                        <span className="text-base font-bold text-white block mb-1 leading-snug">Análisis, Full Stack & Datos</span>
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-white/10">
                        <span className="text-xs text-slate-300 block font-medium">Python · Rails · React</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold block mt-1">Airflow · RAG · Neo4j · SOC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          )}

          {activeTab === 'filosofia' && (
            <div className="soft-skills-panel lg:col-span-12 glass-panel rounded-3xl border border-white/15">
              <h3 className="soft-skills-title text-2xl font-bold text-white flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-amber-400" />
                <span>Habilidades Blandas & Enfoque de Trabajo</span>
              </h3>

              <div className="soft-skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {softSkills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="soft-skill-card rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:border-blue-500/40 transition-colors"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="text-base font-semibold text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'idiomas' && (
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Languages Card */}
              <div className="languages-card glass-panel rounded-3xl border border-white/15">
                <h3 className="about-panel-title text-2xl font-bold text-white flex items-center gap-3">
                  <Languages className="w-6 h-6 text-cyan-400" />
                  <span>Idiomas</span>
                </h3>
                <div className="languages-list">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="language-item rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white text-lg block">{lang.language}</span>
                        <span className="text-xs sm:text-sm text-slate-300 mt-0.5 block">{lang.level}</span>
                      </div>
                      <span className="language-badge text-xs sm:text-sm font-mono rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                        {lang.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Contact Meta Card */}
              <div className="location-card glass-panel rounded-3xl border border-white/15 flex flex-col justify-between">
                <div>
                  <h3 className="about-panel-title text-2xl font-bold text-white flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-rose-400" />
                    <span>Ubicación & Disponibilidad</span>
                  </h3>
                  <p className="location-description text-slate-200 text-base sm:text-lg leading-relaxed">
                    Residente en <strong className="text-white">Guaymallén, Mendoza, Argentina</strong>.
                    Disponible para trabajo remoto global, modalidad híbrida o presencial.
                  </p>
                </div>
                <div className="availability-badge rounded-2xl bg-blue-600/15 border border-blue-500/40 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-mono text-blue-200 font-semibold">Zona Horaria: ART (UTC-3)</span>
                  <span className="text-xs sm:text-sm font-bold text-blue-400">Flexibilidad Horaria</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
