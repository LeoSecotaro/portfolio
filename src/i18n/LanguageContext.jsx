import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
  es: {
    nav: { home: 'Inicio', profile: 'Perfil', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', education: 'Educación', contact: 'Contacto', terminal: 'Terminal', download: 'Descargar CV', menu: 'Abrir menú', language: 'Cambiar idioma', themeLight: 'Activar modo claro', themeDark: 'Activar modo oscuro' },
    hero: {
      headlineFirst: 'Leonardo Tomás', headlineLast: 'Secotaro Ianardi', title: 'Ingeniero en Sistemas de Información con experiencia en', data: 'Ingeniería de Datos & RAG', security: 'Ciberseguridad & SOC Nivel 1', description: 'Diseño y desarrollo soluciones integrales, desde aplicaciones Full Stack con Python, Ruby on Rails y React.js hasta pipelines ETL automatizados con Airflow y modelos de lenguaje acoplados a grafos (Neo4j).', projects: 'Explorar Proyectos', contact: 'Contactar', profile: 'Perfil profesional', location: 'UTN ISI · Mendoza', degree: 'Título UTN ISI', metricDegree: 'UTN ISI Carrera Finalizada', metricRecords: 'Registros ETL Airflow', metricModels: 'Modelos de Grafos & LLM', metricSoc: 'TryHackMe Ciberseguridad'
    },
    section: {
      pillarsEyebrow: 'Pilares Tecnológicos', pillarsTitle: 'Tecnologías y soluciones', pillarsDescription: 'Soluciones integrales que combinan desarrollo Full Stack, datos e IA, bases de datos, infraestructura y seguridad.',
      profileEyebrow: 'Perfil Profesional', aboutEyebrow: 'Resumen Ejecutivo', aboutTitle: 'Ingeniero en Sistemas de Información', aboutDescription: 'Con experiencia en desarrollo Full Stack, ingeniería de datos, ciberseguridad y operaciones SOC Nivel 1.',
      experienceEyebrow: 'Trayectoria Profesional', experienceTitle: 'Experiencia en la Industria & Academia', experienceDescription: 'Desarrollo de software a medida, optimización de consultas SQL, análisis de datos y gestión de infraestructura web.',
      projectsEyebrow: 'Portafolio de Proyectos', projectsTitle: 'Ingeniería & Desarrollo Destacado', projectsDescription: 'Selección de plataformas web, arquitecturas RAG y sistemas distribuidos construidos con las tecnologías más modernas.',
      skillsEyebrow: 'Matriz de Competencias', skillsTitle: 'Habilidades Técnicas & Herramientas', skillsDescription: 'Dominio de lenguajes, marcos de trabajo, orquestadores de datos y herramientas de auditoría de red.',
      educationEyebrow: 'Formación Académica', educationTitle: 'Educación & Certificaciones', educationDescription: 'Título de Grado en Ingeniería y certificaciones internacionales de especialización tecnológica.',
      contactEyebrow: 'Iniciemos una Conversación', contactTitle: 'Contacto & Oportunidades', contactDescription: '¿Tenés un proyecto en mente o buscás sumar un Ingeniero Full Stack / Data a tu equipo?',
      terminalTitle: 'Consola Interactiva CLI', terminalDescription: 'Si querés entretenerte un rato, podés explorar mi información desde esta terminal.'
    },
    common: { viewDetails: 'Ver detalles', closePreview: 'Cerrar vista previa', technologies: 'Tecnologías & Herramientas', keyFeatures: 'Características Clave e Implementación', architecture: 'Resumen de Arquitectura', impact: 'Impacto & Métrica Destacada', level: 'Nivel de Dominio', downloadPdf: 'Descargar PDF', linkedin: 'Perfil de LinkedIn', email: 'Correo electrónico', phone: 'Teléfono / WhatsApp', cvTitle: 'Curriculum Vitae', cvDescription: 'Descargá la versión PDF lista para imprimir.', university: 'Universidad', core: 'Especialidad Core', general: 'Visión General', philosophy: 'Filosofía & Soft Skills', languages: 'Idiomas & Ubicación', academicProject: 'Proyecto Académico', backToTop: 'Volver arriba', informationSystemsEngineer: 'Ingeniero en Sistemas de Información (UTN)', courseTools: 'Herramientas', courseLearning: 'Contenido del curso' },
    skills: { development: 'Desarrollo', data: 'Datos & IA', databases: 'Bases de Datos', infrastructure: 'Infraestructura', security: 'Seguridad & SOC' },
    projectCategories: { all: 'Todos', fullStack: 'Full Stack', data: 'Datos e IA', security: 'Ciberseguridad' }
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', contact: 'Contact', terminal: 'Terminal', download: 'Download CV', menu: 'Open menu', language: 'Change language', themeLight: 'Enable light mode', themeDark: 'Enable dark mode' },
    hero: {
      headlineFirst: 'Leonardo Tomás', headlineLast: 'Secotaro Ianardi', title: 'Information Systems Engineer specializing in', data: 'Data Engineering & RAG', security: 'SOC Infrastructure', description: 'I build end-to-end solutions with Python, Ruby on Rails, and React.js—from automated Airflow ETL pipelines to language models connected to knowledge graphs in Neo4j.', projects: 'Explore Projects', contact: 'Contact', profile: 'Professional profile', location: 'UTN ISI · Mendoza', degree: 'UTN ISI Degree', metricDegree: 'UTN ISI Degree Completed', metricRecords: 'Airflow ETL Records', metricModels: 'Graph Models & LLMs', metricSoc: 'TryHackMe Cybersecurity'
    },
    section: {
      pillarsEyebrow: 'Technology Pillars', pillarsTitle: 'End-to-end solutions with engineering precision', pillarsDescription: 'Hands-on expertise spanning network infrastructure and security, generative AI pipelines, and interactive frontends.',
      profileEyebrow: 'Professional Profile', aboutEyebrow: 'Executive Summary', aboutTitle: 'Information Systems Engineer', aboutDescription: 'Specialized in Full Stack development, data engineering, and cybersecurity with a business-impact mindset.',
      experienceEyebrow: 'Professional Journey', experienceTitle: 'Industry & Academic Experience', experienceDescription: 'Custom software development, SQL query optimization, data analysis, and web infrastructure management.',
      projectsEyebrow: 'Project Portfolio', projectsTitle: 'Featured Engineering & Development', projectsDescription: 'A selection of web platforms, RAG architectures, and distributed systems built with modern technologies.',
      skillsEyebrow: 'Skills Matrix', skillsTitle: 'Technical Skills & Tools', skillsDescription: 'Expertise in languages, frameworks, data orchestrators, and network-auditing tools.',
      educationEyebrow: 'Academic Background', educationTitle: 'Education & Certifications', educationDescription: 'Engineering degree and international technology specialization certifications.',
      contactEyebrow: 'Let’s Start a Conversation', contactTitle: 'Contact & Opportunities', contactDescription: 'Do you have a project in mind or are you looking to add a Full Stack / Data Engineer to your team?',
      terminalTitle: 'Interactive CLI Console', terminalDescription: 'If you would like to explore for a while, you can browse my information through this terminal.'
    },
    common: { viewDetails: 'View details', closePreview: 'Close preview', technologies: 'Technologies & Tools', keyFeatures: 'Key Features & Implementation', architecture: 'Architecture Summary', impact: 'Impact & Key Metric', level: 'Proficiency Level', downloadPdf: 'Download PDF', linkedin: 'LinkedIn Profile', email: 'Email', phone: 'Phone / WhatsApp', cvTitle: 'Unified Curriculum Vitae', cvDescription: 'Download the print-ready PDF version.', university: 'University', core: 'Core Specialty', general: 'Overview', philosophy: 'Philosophy & Soft Skills', languages: 'Languages & Location', academicProject: 'Academic Project', backToTop: 'Back to top', informationSystemsEngineer: 'Information Systems Engineer (UTN)', courseTools: 'Tools', courseLearning: 'Course content' },
    skills: { development: 'Development', data: 'Data & AI', databases: 'Databases', infrastructure: 'Infrastructure', security: 'Security & SOC' },
    projectCategories: { all: 'All', fullStack: 'Full Stack', data: 'Data & AI', security: 'Cybersecurity' }
  }
};

const LanguageContext = createContext(null);

const getValue = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'es');

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === 'es' ? 'en' : 'es'),
    t: (key) => getValue(translations[language], key) ?? key
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function localize(item, language) {
  if (language !== 'en' || !item?.en) return item;
  return { ...item, ...item.en };
}
