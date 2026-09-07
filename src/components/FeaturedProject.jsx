import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function FeaturedProject({ project, onOpen }) {
  const { language } = useLanguage();
  const en = language === 'en';
  const [view, setView] = useState(0);
  const reducedMotion = useReducedMotion();
  const views = en ? ['Medical scheduling', 'Financial data'] : ['Horarios médicos', 'Datos financieros'];
  const screenshot = project.gallery[view];
  return (
    <motion.article
      className="featured-work"
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.5 }}
    >
      <div className="featured-copy">
        <p className="editorial-label">01 / {en ? 'Featured case · HealthTech' : 'Caso destacado · HealthTech'}</p>
        <h3>{en ? 'Less friction.\nMore clarity.' : 'Menos fricción.\nMás claridad.'}</h3>
        <p className="featured-client">{project.title}</p>
        <p>{project.summary}</p>
        <div className="featured-outcome"><span className="editorial-label">{en ? 'The contribution' : 'El aporte'}</span><p>{project.metrics}</p></div>
        <button type="button" onClick={onOpen} className="editorial-button">{en ? 'Explore the project' : 'Conocé el proyecto'}<ArrowUpRight size={18} /></button>
      </div>
      <div className="featured-visual">
        <div className="featured-switch" role="group" aria-label={en ? 'Project views' : 'Vistas del proyecto'}>{views.map((label, index) => <button type="button" key={label} aria-pressed={view === index} onClick={() => setView(index)}>{label}</button>)}</div>
        <button type="button" className="featured-image-button" onClick={onOpen} aria-label={en ? 'Open project details' : 'Abrir detalles del proyecto'}><img src={screenshot.src} alt={views[view]} loading="lazy" width="1440" height="900" /></button>
        <div className="featured-caption"><span>{en ? 'Actual application screenshot' : 'Captura real de la aplicación'}</span><span>React / Rails / ETL</span></div>
      </div>
    </motion.article>
  );
}
