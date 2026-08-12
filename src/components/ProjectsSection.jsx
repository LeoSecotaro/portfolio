import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, BrainCircuit, Workflow, ShieldAlert, BookOpen, Heart,
  ExternalLink, Layers, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { localize, useLanguage } from '../i18n/LanguageContext';

const iconMap = {
  Home: Home,
  BrainCircuit: BrainCircuit,
  Workflow: Workflow,
  ShieldAlert: ShieldAlert,
  BookOpen: BookOpen,
  Heart: Heart
};

const categories = [
  { key: 'Todos', labelKey: 'all' },
  { key: 'Full Stack', labelKey: 'fullStack' },
  { key: 'Datos e IA', labelKey: 'data' },
  { key: 'Ciberseguridad', labelKey: 'security' }
];

export default function ProjectsSection() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const localizedProjects = projects.map((project) => localize(project, language));
  const filteredProjects = activeCategory === 'Todos'
    ? localizedProjects
    : localizedProjects.filter(p => p.category === activeCategory);

  return (
    <section id="proyectos" className="w-full scroll-mt-36 py-36 sm:py-48 relative overflow-hidden flex flex-col items-center">
      
      {/* Ambient background light */}
      <div className="glow-orb top-1/3 right-0 w-[550px] h-[550px] bg-indigo-600/15" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="section-heading flex flex-col max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold text-center block mb-2">
            {t('section.projectsEyebrow')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 mb-6 leading-snug text-center">
            {t('section.projectsTitle')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            {t('section.projectsDescription')}
          </p>
        </div>

        {/* Filter Categories - Guaranteed Massive Separation via selector-spacing */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3 selector-spacing">
          <div className="selector-bar inline-flex rounded-full glass-panel border border-white/25 flex-wrap justify-center shadow-2xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`selector-pill relative text-base sm:text-lg font-extrabold rounded-full transition-all duration-300 whitespace-nowrap flex items-center justify-center ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="selector-active-pill absolute inset-y-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 border border-blue-300/60 rounded-full shadow-2xl shadow-blue-500/60"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 px-2 tracking-wide">{t(`projectCategories.${cat.labelKey}`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-8 sm:mt-12">
          {filteredProjects.map((project, index) => {
            const IconComp = iconMap[project.icon] || Layers;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.18 } }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.1 },
                  y: { duration: 0.18 },
                  scale: { duration: 0.18 }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${t('common.viewDetails')}: ${project.title}`}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="project-card apple-card glass-panel border border-white/15 flex flex-col justify-between group overflow-hidden cursor-pointer"
              >
                {/* Project Header Banner with Apple Clearance */}
                <div className={`bg-gradient-to-r ${project.gradient} project-card-banner min-h-[175px] sm:min-h-[195px] flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                  {/* Top Badge Row */}
                  <div className="relative z-10 flex items-center justify-between gap-4 w-full">
                    <span className="card-badge-capsule bg-white/15 backdrop-blur-md text-xs sm:text-sm font-sans text-white font-semibold border border-white/25 shadow-md tracking-wide">
                      {project.badge}
                    </span>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-lg shrink-0">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* Bottom Title Row */}
                  <div className="relative z-10 pt-4 w-full">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body with Safe Padding */}
                <div className="p-10 sm:p-14 card-padding flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2.5 mb-8">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="project-tech-pill rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-slate-200 font-bold shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-mono text-slate-400 font-medium truncate flex-1">
                      {project.metrics}
                    </span>

                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 group-hover:text-blue-300 shrink-0">
                      <span>{t('common.viewDetails')}</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Project QuickLook Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
