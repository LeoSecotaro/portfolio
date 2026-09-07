import { experience } from '../data/portfolioData';
import { localize, useLanguage } from '../i18n/LanguageContext';

import { motion, useReducedMotion } from 'framer-motion';

export default function ExperienceSection() {
  const { language } = useLanguage();
  const en = language === 'en';
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="experiencia" className="editorial-experience scroll-mt-36">
      <div className="section-container">
        <div className="editorial-section-title"><p className="editorial-label">02 / {en ? 'Experience' : 'Trayectoria'}</p><h2>{en ? 'Engineering, in practice.' : 'Ingeniería, en la práctica.'}</h2></div>
        {experience.map((entry, index) => {
          const item = localize(entry, language);
          return <motion.article
            className="experience-entry"
            key={item.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.48, delay: shouldReduceMotion ? 0 : index * 0.12, ease: 'easeOut' }}
          >
            <div className="experience-meta"><span className="editorial-label">0{index + 1} / {item.badge}</span><p>{item.period}</p><span>{item.location}</span></div>
            <div className="experience-story"><p className="editorial-label">{item.company}</p><h3>{item.role}</h3><p className="experience-lead">{item.description}</p><details><summary>{en ? 'Explore my contributions' : 'Explorá mis aportes'}</summary><ul>{item.bulletPoints.map(point => <li key={point}>{point}</li>)}</ul></details><p className="experience-technologies">{item.techStack.join(' / ')}</p></div>
          </motion.article>;
        })}
      </div>
    </section>
  );
}
