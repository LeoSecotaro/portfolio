import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle, ExternalLink, Database, 
  Code2, Cpu, ShieldCheck, Zap, Server, Activity, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { language, t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.id]);

  if (!project) return null;
  const gallery = project.gallery || [];
  const currentImage = gallery[activeImage];

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        
        {/* Backdrop filter blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="project-modal-backdrop fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Window (Apple Spatial UI / macOS QuickLook) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          className="project-modal relative w-full max-w-4xl glass-panel border border-white/20 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto bg-slate-950 text-white"
        >
          {/* Header Banner with Gradient Accent */}
          <div className={`project-modal-header h-36 sm:h-44 bg-gradient-to-r ${project.gradient} flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="project-modal-badge rounded-full bg-white/20 backdrop-blur-md text-xs font-mono text-white font-semibold border border-white/30">
                {project.badge}
              </span>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label={t('common.closePreview')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="project-modal-body max-h-[70vh] overflow-y-auto">
            
            {/* Project Summary & Architecture */}
            <div className="project-modal-section">
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-400 font-semibold mb-3">
                {t('common.architecture')}
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {gallery.length > 0 && (
              <div className="project-modal-section">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                    {language === 'es' ? 'Galería del proyecto' : 'Project gallery'}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {activeImage + 1} / {gallery.length}
                  </span>
                </div>

                <div className="project-gallery relative overflow-hidden rounded-2xl border border-white/15 bg-black/40">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img
                      key={currentImage.src}
                      src={currentImage.src}
                      alt={currentImage.alt}
                      initial={{ opacity: 0, x: 24, scale: 0.985 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -24, scale: 0.985 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="block h-auto max-h-[26rem] w-full object-contain"
                    />
                  </AnimatePresence>

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="project-gallery-control absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 text-white border border-white/20"
                        aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="project-gallery-control absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 text-white border border-white/20"
                        aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                <div className="project-gallery-dots flex items-center justify-center gap-2 mt-4">
                  {gallery.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`rounded-full transition-all ${index === activeImage ? 'w-6 bg-blue-400' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                      aria-label={`${language === 'es' ? 'Ver' : 'View'} ${image.alt}`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-center text-xs sm:text-sm font-mono text-slate-400">
                  {currentImage.alt}
                </p>
              </div>
            )}

            {/* Impact Metric Banner */}
            <div className="project-modal-metric rounded-2xl bg-blue-600/15 border border-blue-500/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-300 font-bold block mb-1">{t('common.impact')}</span>
                <span className="text-base font-semibold text-white">{project.metrics}</span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="project-modal-section">
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-indigo-400 font-semibold mb-4">
                {t('common.keyFeatures')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="project-modal-feature rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200 leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="project-modal-section">
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-4">
                {t('common.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="project-modal-tech-pill rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-slate-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="project-modal-footer border-t border-white/10 bg-slate-900/90 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
              <Server className="w-4 h-4 text-blue-400" />
              <span>{language === 'es' ? 'Proyecto Verificado · Leonardo Secotaro' : 'Verified Project · Leonardo Secotaro'}</span>
            </div>

            <button
              onClick={onClose}
              className="apple-btn-secondary py-2.5 px-6 text-xs sm:text-sm font-semibold cursor-pointer"
            >
              {t('common.closePreview')}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
