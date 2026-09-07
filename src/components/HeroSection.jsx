import { ArrowRight, ArrowDown, Code2, Database, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function HeroSection() {
  const { language, t } = useLanguage();
  const en = language === 'en';
  return (
    <section id="hero" className="editorial-hero scroll-mt-36">
      <div className="section-container editorial-hero-content">
        <div className="hero-uml-canvas">
        <div className="hero-content-card">
          <div className="editorial-byline"><span>LEONARDO SECOTARO IANARDI</span><span>MENDOZA, AR ↗</span></div>
          <div className="hero-card-main">
            <p className="editorial-label">{en ? 'Information Systems Engineer / UTN' : 'Ingeniero en Sistemas de Información / UTN'}</p>
            <h1>{en ? 'From a problem' : 'De un problema'}<br /><span className="editorial-headline-accent">{en ? 'to a solution.' : 'a una solución.'}</span></h1>
            <p className="editorial-intro">{en ? 'I build applications, connect data, and look after what happens behind the scenes.' : 'Construyo aplicaciones, conecto datos y cuido lo que pasa detrás.'}</p>
            <div className="editorial-actions">
              <a href="#proyectos" className="editorial-button">{en ? 'Explore my work' : 'Explorá mi trabajo'}<ArrowRight size={18} /></a>
              <a href="#perfil" className="editorial-link">{t('hero.profile')}<ArrowRight size={16} /></a>
            </div>
          </div>
          <aside className="editorial-note">
            <span className="editorial-label">{en ? 'One perspective, three dimensions' : 'Una mirada, tres dimensiones'}</span>
            {[
              [Code2, '01', 'Full Stack', en ? 'From the interface to the business logic.' : 'De la interfaz a la lógica del negocio.'],
              [Database, '02', 'Data & AI', en ? 'From scattered information to useful data.' : 'De información dispersa a datos útiles.'],
              [ShieldCheck, '03', en ? 'Security & infrastructure' : 'Seguridad e infraestructura', en ? 'A foundation for everything else.' : 'La base que sostiene todo lo demás.'],
            ].map(([Icon, number, title, description]) => <div className="editorial-discipline" key={number}><span>{number}</span><div><h2><Icon size={18} />{title}</h2><p>{description}</p></div></div>)}
            <a href="#contacto" className="editorial-link">{en ? 'Let’s talk about your next project' : 'Hablemos de tu próximo proyecto'}<ArrowRight size={16} /></a>
          </aside>
        </div>
        <div className="hero-class-diagram" aria-label={en ? 'Class diagram' : 'Diagrama de clases'}>
          <svg className="uml-connections" viewBox="0 0 1200 680" preserveAspectRatio="none" aria-hidden="true">
            <defs><marker id="uml-relation-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" /></marker></defs>
            <path d="M170 174H390V44H515" markerEnd="url(#uml-relation-arrow)" /><path d="M685 44H810V174H1030" markerEnd="url(#uml-relation-arrow)" />
            <path d="M85 218V489" markerEnd="url(#uml-relation-arrow)" /><path d="M1115 218V489" markerEnd="url(#uml-relation-arrow)" />
            <path d="M170 533H390V635H515" markerEnd="url(#uml-relation-arrow)" /><path d="M685 635H810V533H1030" markerEnd="url(#uml-relation-arrow)" />
            <g className="uml-cardinality"><text x="181" y="166">1</text><text x="496" y="36">*</text><text x="696" y="36">1</text><text x="1014" y="166">*</text><text x="94" y="232">1</text><text x="94" y="476">*</text><text x="1124" y="232">1</text><text x="1124" y="476">*</text><text x="181" y="525">1</text><text x="496" y="627">*</text><text x="696" y="627">1</text><text x="1014" y="525">*</text></g>
          </svg>
          <div className="uml-node uml-client"><strong>PortfolioView</strong><span>+ language: Locale</span><span>+ navigateTo()</span></div>
          <div className="uml-node uml-project"><strong>Project</strong><span>+ techStack: Tool[]</span><span>+ openDetails()</span></div>
          <div className="uml-node uml-data"><strong>DataPipeline</strong><span>+ source: Excel</span><span>+ normalize()</span></div>
          <div className="uml-node uml-security"><strong>SecurityMonitor</strong><span>+ event: Log</span><span>+ audit()</span></div>
          <div className="uml-node uml-skill"><strong>Skill</strong><span>+ category: Domain</span><span>+ proficiency()</span></div>
          <div className="uml-node uml-experience"><strong>Experience</strong><span>+ company: Organization</span><span>+ contribution()</span></div>
        </div>
        </div>
        <div className="editorial-hero-foot"><span>{en ? 'Software with context. Engineering with purpose.' : 'Software con contexto. Ingeniería con propósito.'}</span><a href="#proyectos">{en ? 'Selected work' : 'Trabajo seleccionado'} <ArrowDown size={16} /></a></div>
      </div>
    </section>
  );
}
