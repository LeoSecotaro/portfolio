import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Terminal, ShieldCheck, Cpu, 
  Sparkles, Layers, CheckCircle2 
} from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useLanguage } from '../i18n/LanguageContext';

const skillCategories = [
  { key: 'desarrollo', labelKey: 'development', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { key: 'datos', labelKey: 'data', icon: Cpu, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
  { key: 'basesDeDatos', labelKey: 'databases', icon: Database, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { key: 'infraestructura', labelKey: 'infrastructure', icon: Terminal, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { key: 'seguridad', labelKey: 'security', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/20' }
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('desarrollo');

  return (
    <section id="habilidades" className="w-full scroll-mt-36 pt-48 pb-36 sm:pt-56 sm:pb-48 relative bg-black/40 border-t border-white/10 flex flex-col items-center">
      
      {/* Background glow */}
      <div className="glow-orb top-1/2 right-1/4 w-[450px] h-[450px] bg-cyan-600/10" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="section-heading skills-heading flex flex-col max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            {t('section.skillsEyebrow')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            {t('section.skillsTitle')}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            {t('section.skillsDescription')}
          </p>
        </div>

        {/* Category Tabs - Guaranteed Massive Separation via selector-spacing */}
        <div className="w-full flex justify-center selector-spacing">
          <div className="selector-bar inline-flex rounded-full glass-panel border border-white/25 flex-wrap justify-center shadow-2xl">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`selector-pill relative text-base sm:text-lg font-extrabold rounded-full transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillPill"
                      className="selector-active-pill absolute inset-y-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 border border-blue-300/60 rounded-full shadow-2xl shadow-blue-500/60"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-3 px-2">
                    <Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                    <span>{t(`skills.${cat.labelKey}`)}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-12"
        >
          {skills[activeTab]?.map((skill, index) => (
            <div
              key={skill.name}
              className="apple-card card-padding glass-panel border border-white/15 flex flex-col justify-between hover:border-blue-500/50"
            >
              <div>
                <div className="skill-card-header flex flex-col items-start gap-3 px-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2.5 min-w-0 w-full">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>{skill.name}</span>
                  </h3>
                  <span className="text-xs sm:text-sm font-sans card-badge-capsule bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold shrink-0 tracking-wide">
                    {skill.tag}
                  </span>
                </div>

                {/* Level Meter Bar */}
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm font-mono text-slate-300 mt-2 px-1 pb-1">
                <span>{t('common.level')}</span>
                <span className="font-bold text-blue-400 text-sm sm:text-base">{skill.level}%</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
