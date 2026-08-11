// Centralized Portfolio Data extracted from CV & LinkedIn profile

export const personalDetails = {
  name: "Leonardo Secotaro Ianardi",
  shortName: "Leonardo Secotaro",
  title: "Ingeniero en Sistemas de Información",
  subtitle: "Full Stack Developer · Data & AI Engineer · Cybersecurity Specialist",
  location: "Guaymallén, Mendoza, Argentina",
  email: "leonardosecotaro@gmail.com",
  phone: "+54 261 5712839",
  linkedin: "https://www.linkedin.com/in/leonardo-secotaro-ianardi/",
  github: "https://github.com/leonardosecotaro", // link standard
  cvPath: "/Leonardo_Secotaro_CV.pdf",
  statusBadge: "Disponible para Desafíos Full Stack & Data",
  summary: `Soy Ingeniero en Sistemas de Información, con una formación integral orientada al desarrollo web Full Stack, la ingeniería de datos, la arquitectura de soluciones y la ciberseguridad. Me especializo en crear aplicaciones dinámicas y escalables con Python, Ruby on Rails y React.js. También cuento con experiencia en pipelines ETL automatizados, integración de modelos de lenguaje (RAG / LLMs), bases de datos SQL y de grafos (Neo4j), además de monitoreo SOC e infraestructura tecnológica bajo metodologías ágiles.`,
  summaryEn: `I am an Information Systems Engineer with a well-rounded background in Full Stack web development, data engineering, solution architecture, and cybersecurity. I specialize in building dynamic, scalable applications with Python, Ruby on Rails, and React.js. I also have experience with automated ETL pipelines, language-model integration (RAG / LLMs), SQL and graph databases (Neo4j), SOC monitoring, and technology infrastructure under agile methodologies.`
};

export const keyPillars = [
  {
    id: "01",
    title: "Desarrollo Full Stack",
    description: "Creación de aplicaciones web modernas, robustas y de alto rendimiento utilizando React.js en el frontend y Python / Ruby on Rails en el backend.",
    icon: "Code2",
    badge: "React · Rails · Python",
    en: { title: "Full Stack Development", description: "Building modern, robust, high-performance web applications with React.js on the frontend and Python / Ruby on Rails on the backend." }
  },
  {
    id: "02",
    title: "Ingeniería de Datos & RAG",
    description: "Diseño de pipelines ETL automatizados con Apache Airflow, modelado de grafos con Neo4j y recuperación contextual RAG con LangChain y LLMs.",
    icon: "DatabaseZap",
    badge: "Airflow · Neo4j · LangChain",
    en: { title: "Data Engineering & RAG", description: "Designing automated ETL pipelines with Apache Airflow, Neo4j graph modeling, and contextual RAG retrieval with LangChain and LLMs." }
  },
  {
    id: "03",
    title: "Bases de Datos & SQL",
    description: "Modelado lógico y físico de arquitecturas de bases de datos relacionales y no relacionales, optimizando consultas complejas para analítica financiera y operaciones.",
    icon: "ServerCog",
    badge: "SQL · MySQL · Neo4j",
    en: { title: "Databases & SQL", description: "Logical and physical modeling of relational and non-relational database architectures, optimizing complex queries for financial analytics and operations." }
  },
  {
    id: "04",
    title: "Infraestructura & SOC",
    description: "Monitoreo de tráfico de red, análisis de vulnerabilidades (Nmap, Wireshark, Snort, Ettercap) y administración avanzada de entornos Linux (Ubuntu).",
    icon: "ShieldCheck",
    badge: "SOC N1 · Wireshark · Linux",
    en: { title: "Infrastructure & SOC", description: "Network-traffic monitoring, vulnerability analysis with Nmap, Wireshark, Snort, and Ettercap, plus advanced Linux administration." }
  }
];

export const experience = [
  {
    id: "seu-utn",
    role: "Desarrollador Full Stack & Infraestructura Web",
    company: "Secretaría de Extensión Universitaria (UTN)",
    period: "Marzo 2026 — Julio 2026",
    location: "Mendoza, Argentina",
    badge: "UTN Extensión",
    description: "Desarrollo integral, análisis de requerimientos y gestión de disponibilidad de la plataforma institucional.",
    bulletPoints: [
      "Desarrollo Full Stack, análisis de requerimientos, diseño funcional y mantenimiento continuo de la página oficial de la Secretaría.",
      "Implementación de pipelines de integración continua (CI/CD), estructuración de la información académica y construcción de interfaces escalables centradas en el usuario.",
      "Gestión de infraestructura web, instalación de software, configuración de despliegues técnicos y elaboración de informes de rendimiento para garantizar disponibilidad y escalabilidad."
    ],
    techStack: ["React.js", "Ruby On Rails", "CI/CD", "Linux (Ubuntu)", "REST APIs", "SQL"],
    en: {
      role: "Full Stack Developer & Web Infrastructure",
      company: "University Extension Office (UTN)",
      period: "March 2026 — July 2026",
      badge: "UTN Extension",
      description: "End-to-end development, requirements analysis, and availability management for the institutional platform.",
      bulletPoints: ["Full Stack development, requirements analysis, functional design, and continuous maintenance for the Office website.", "CI/CD implementation, academic-information structuring, and scalable user-centered interfaces.", "Web infrastructure management, deployment configuration, and performance reporting to ensure availability and scalability."]
    }
  },
  {
    id: "servicios-cardiologia-sa",
    role: "Desarrollador Full Stack & Data Analyst",
    company: "Servicios de Cardiología SA",
    period: "Enero 2026 — Marzo 2026 - Actualidad",
    location: "Mendoza, Argentina",
    badge: "Salud & Financiero",
    description: "Construcción de sistemas en tiempo real para turnos médicos y procesamiento de métricas financieras.",
    bulletPoints: [
      "Desarrollo end-to-end, relevamiento de requerimientos y diseño lógico de un sistema integral de gestión de turnos médicos interactivo y en tiempo real.",
      "Extracción, transformación y estructuración de datos (ETL) para la construcción de un módulo de comparación de métricas financieras.",
      "Desarrollo de consultas SQL eficientes integradas a la visualización del frontend para generar reportes estratégicos decisionales.",
      "Soporte, mantenimiento y monitoreo de los sistemas internos, garantizando la continuidad operativa de la infraestructura y atención de incidencias."
    ],
    techStack: ["React.js", "SQL / MySQL", "Ruby On Rails", "ETL", "Linux"],
    en: {
      role: "Full Stack Developer & Data Analyst",
      period: "January 2026 — Present",
      badge: "Healthcare & Finance",
      description: "Building real-time systems for medical scheduling and financial-metric processing.",
      bulletPoints: ["End-to-end development, requirements gathering, and logical design for an interactive real-time medical scheduling system.", "ETL extraction, transformation, and structuring for a financial-metrics comparison module.", "Efficient SQL queries integrated with frontend visualizations for strategic reporting.", "Support, maintenance, and internal-system monitoring to ensure operational continuity."]
    }
  }
];

export const projects = [
  {
    id: "homefixing",
    title: "HomeFixing",
    subtitle: "Plataforma de Servicios del Hogar",
    category: "Full Stack",
    badge: "Full Stack App",
    summary: "Red social interactiva orientada a conectar trabajadores independientes y clientes para servicios del hogar.",
    description: "Aplicación Full Stack desarrollada con arquitectura Cliente-Servidor. Cuenta con un backend robusto en Ruby on Rails que gestiona la autenticación segura, lógica de negocio y APIs RESTful sobre MySQL, acoplado a una interfaz responsiva y dinámica en React.js.",
    keyFeatures: [
      "Autenticación segura de usuarios y gestión de roles (clientes/prestadores).",
      "API RESTful escalable estructurada en Ruby on Rails.",
      "Base de datos relacional optimizada en MySQL con índices para rápida búsqueda.",
      "Interfaz frontend responsiva (Mobile-First) desarrollada con React.js."
    ],
    techStack: ["Ruby on Rails", "React.js", "MySQL", "JavaScript", "HTML5/CSS3", "REST API"],
    metrics: "Arquitectura cliente-servidor desacoplada con 100% de vistas responsivas.",
    gradient: "from-blue-600 to-indigo-600",
    icon: "Home",
    en: {
      subtitle: "Home Services Platform",
      summary: "An interactive social platform that connects independent workers with customers looking for home services.",
      description: "A Full Stack application built with a client-server architecture. Ruby on Rails provides secure authentication, business logic, and REST APIs over MySQL, paired with a responsive React.js interface.",
      keyFeatures: ["Secure user authentication and role management for customers and providers.", "A scalable Ruby on Rails REST API.", "An optimized MySQL relational database for fast search.", "A responsive, mobile-first React.js frontend."],
      metrics: "Decoupled client-server architecture with fully responsive views."
    }
  },
  {
    id: "rag-system",
    title: "Sistema RAG Cinematográfico con Grafos",
    subtitle: "Proyecto Académico · Neo4j, Ollama & Gemma3:4b",
    category: "Datos e IA",
    badge: "AI / GenAI & Grafos",
    summary: "Proyecto académico de consulta en lenguaje natural sobre un grafo cinematográfico de películas, géneros, actores y usuarios.",
    description: "Sistema RAG que modela el dominio cinematográfico en Neo4j e integra el modelo local Gemma3:4b a través de Ollama. El flujo interpreta preguntas en lenguaje natural, consulta el grafo mediante Cypher y genera respuestas contextuales sobre películas, géneros y actores.",
    keyFeatures: [
      "Modelado en Neo4j de nodos Movie, Genre, Actor y User, con relaciones ACTED_IN, HAS_GENRE y RATED.",
      "Ejecución local de Gemma3:4b con Ollama y configuración mediante variables de entorno.",
      "Consultas Cypher automáticas para responder preguntas sobre películas, géneros y actores.",
      "Generación de respuestas contextualizadas a partir de la información estructurada del grafo.",
      "Base preparada para extender el grafo, incorporar memoria conversacional y automatizar LLM-to-Cypher."
    ],
    techStack: ["Python", "Neo4j", "Cypher", "Ollama", "Gemma3:4b", "LLM Local"],
    metrics: "Consultas cinematográficas en lenguaje natural con respuestas contextualizadas desde Neo4j.",
    gradient: "from-purple-600 to-pink-600",
    icon: "BrainCircuit",
    en: {
      title: "Cinematic RAG System with Graphs",
      subtitle: "Academic Project · Neo4j, Ollama & Gemma3:4b",
      summary: "An academic natural-language query system over a cinematic graph of movies, genres, actors, and users.",
      description: "A RAG system that models the movie domain in Neo4j and integrates the local Gemma3:4b model through Ollama. It interprets natural-language questions, queries the graph with Cypher, and produces contextual answers.",
      keyFeatures: ["Neo4j modeling of Movie, Genre, Actor, and User nodes with ACTED_IN, HAS_GENRE, and RATED relationships.", "Local Gemma3:4b execution with Ollama and environment-variable configuration.", "Automatic Cypher queries for questions about movies, genres, and actors.", "Contextual responses generated from structured graph information.", "A foundation for graph expansion, conversational memory, and LLM-to-Cypher automation."],
      metrics: "Natural-language movie queries with contextual responses sourced from Neo4j."
    }
  },
  {
    id: "etl-pipeline",
    title: "Pipeline de Datos Automatizado (ETL)",
    subtitle: "Apache Airflow & API TMDB",
    category: "Datos e IA",
    badge: "Proyecto Académico",
    summary: "Proyecto académico de ingeniería de datos que procesa más de 10,000 registros cinematográficos para un predictor de ganancias de películas.",
    description: "Pipeline de ingeniería de datos automatizado que extrae, limpia y transforma datos masivos provenientes de la API REST de TMDB. Los datos normalizados se utilizaron para entrenar un predictor de ganancias de películas con Scikit-learn, considerando actores, fechas de estreno, directores, géneros y otras variables; alcanzó un coeficiente de determinación R² del 79%.",
    keyFeatures: [
      "Orquestación y programación de DAGs en Apache Airflow.",
      "Extracción masiva y manejo de paginación/rate limits en API REST TMDB (+10,000 registros).",
      "Limpieza, normalización e imputación de valores faltantes mediante Python & Pandas.",
      "Transformación y estructuración de datos para un predictor de ganancias con Scikit-Learn."
    ],
    techStack: ["Apache Airflow", "Python", "Pandas", "Scikit-Learn", "REST API", "ETL"],
    metrics: "Predictor de ganancias de películas con datos ETL y un R² (coeficiente de determinación) del 79%.",
    gradient: "from-amber-500 to-rose-500",
    icon: "Workflow",
    en: {
      title: "Automated Data Pipeline (ETL)",
      subtitle: "Apache Airflow & TMDB API",
      badge: "Academic Project",
      summary: "An academic data-engineering project that processes more than 10,000 movie records for a box-office revenue predictor.",
      description: "An automated data-engineering pipeline that extracts, cleans, and transforms large datasets from the TMDB REST API. The normalized data trained a Scikit-learn movie-revenue predictor using actors, release dates, directors, genres, and other variables, reaching an R² score of 79%.",
      keyFeatures: ["Airflow DAG orchestration and scheduling.", "Large-scale extraction and pagination/rate-limit handling for the TMDB REST API.", "Cleaning, normalization, and missing-value imputation with Python and Pandas.", "Data transformation for a Scikit-learn revenue predictor."],
      metrics: "Movie-revenue predictor trained with ETL data, achieving an R² score of 79%."
    }
  },
  {
    id: "soc-infrastructure",
    title: "Gestión de Infraestructura & SOC",
    subtitle: "Ciberseguridad y Monitoreo de Red",
    category: "Ciberseguridad",
    badge: "SOC & Infraestructura",
    summary: "Monitoreo continuo de tráfico, detección de vulnerabilidades y hardening en entornos Linux.",
    description: "Implementación de metodologías de operaciones de seguridad (SOC) para auditoría de tráfico de red, análisis de protocolos e identificación de amenazas cibernéticas. Administración de hardware, configuración de estaciones de trabajo y particionamiento avanzado en Linux.",
    keyFeatures: [
      "Captura y análisis profundo de paquetes de red utilizando Wireshark.",
      "Escaneo de puertos, servicios y detección de vulnerabilidades con Nmap.",
      "Configuración e inspección de reglas IDS/IPS mediante Snort.",
      "Pruebas de concepto de seguridad de red con Ettercap.",
      "Administración avanzada de terminal Linux (Ubuntu), almacenamiento y particiones."
    ],
    techStack: ["Wireshark", "Nmap", "Snort", "Ettercap", "Linux (Ubuntu)", "TryHackMe SOC"],
    metrics: "Hardening de red y monitoreo preventivo de paquetes e incidencias.",
    gradient: "from-emerald-500 to-teal-700",
    icon: "ShieldAlert",
    en: {
      title: "Infrastructure & SOC Management",
      subtitle: "Cybersecurity & Network Monitoring",
      badge: "SOC & Infrastructure",
      summary: "Continuous traffic monitoring, vulnerability detection, and hardening in Linux environments.",
      description: "Implementation of Security Operations Center (SOC) practices for network-traffic auditing, protocol analysis, and threat identification, alongside hardware administration, workstation configuration, and advanced Linux partitioning.",
      keyFeatures: ["Deep network packet capture and analysis with Wireshark.", "Port and service scanning with Nmap.", "IDS/IPS rule configuration and inspection with Snort.", "Network-security proof-of-concept tests with Ettercap.", "Advanced Ubuntu administration, storage, and partitioning."],
      metrics: "Network hardening and proactive packet and incident monitoring."
    }
  },
  {
    id: "seu-utn-platform",
    title: "Secretaría de Extensión Universitaria",
    subtitle: "Plataforma Institucional UTN",
    category: "Full Stack",
    badge: "Full Stack & CI/CD",
    summary: "Plataforma institucional desarrollada para centralizar la información académica y los servicios de la Secretaría de Extensión Universitaria.",
    description: "Desarrollo Full Stack de la página oficial de la Secretaría de Extensión Universitaria de UTN, desde el relevamiento de requerimientos y el diseño funcional hasta el mantenimiento, los despliegues y la mejora continua de la experiencia de usuario.",
    keyFeatures: [
      "Desarrollo y mantenimiento de interfaces institucionales escalables centradas en el usuario.",
      "Análisis de requerimientos y estructuración de información académica.",
      "Implementación de pipelines CI/CD para despliegues confiables.",
      "Gestión de infraestructura web, disponibilidad y reportes de rendimiento."
    ],
    techStack: ["React.js", "Ruby on Rails", "SQL", "REST APIs", "CI/CD", "Linux"],
    metrics: "Plataforma institucional con despliegues, mantenimiento y monitoreo continuo.",
    gradient: "from-cyan-600 to-blue-700",
    icon: "BookOpen",
    en: {
      title: "University Extension Office",
      subtitle: "UTN Institutional Platform",
      summary: "An institutional platform built to centralize academic information and services for the University Extension Office.",
      description: "Full Stack development for the UTN University Extension Office website, from requirements gathering and functional design to maintenance, deployments, and continuous user-experience improvement.",
      keyFeatures: ["Development and maintenance of scalable, user-centered institutional interfaces.", "Requirements analysis and academic-information structuring.", "CI/CD pipelines for reliable deployments.", "Web infrastructure, availability, and performance-report management."],
      metrics: "Institutional platform with continuous deployment, maintenance, and monitoring."
    }
  },
  {
    id: "servicios-cardiologia-sa-proyecto",
    title: "Servicios de Cardiología SA",
    subtitle: "Horarios Médicos & ETL Financiero",
    category: "Full Stack",
    badge: "HealthTech & Data",
    summary: "Sistema integral para organizar horarios médicos y procesar información financiera mediante carga y normalización de archivos Excel.",
    description: "Solución desarrollada para Servicios de Cardiología SA que centraliza la gestión de los horarios de los médicos, sus faltas y reemplazos mediante un calendario propio e interactivo. Además, incorpora un módulo ETL financiero que recibe archivos Excel, normaliza su información y permite compararla con los datos previamente cargados.",
    keyFeatures: [
      "Calendario propio e interactivo para la planificación de horarios médicos.",
      "Relevamiento de requerimientos y diseño lógico de la solución.",
      "Registro y seguimiento de faltas, disponibilidad y reemplazos.",
      "Carga de archivos Excel y normalización de datos mediante un proceso ETL.",
      "Comparación de información financiera cargada para facilitar el análisis operativo."
    ],
    techStack: ["React.js", "SQL / MySQL", "ETL", "Excel", "Calendario Interactivo", "REST APIs"],
    metrics: "Horarios médicos centralizados y datos financieros normalizados para su comparación.",
    gradient: "from-rose-600 to-red-700",
    icon: "Heart",
    en: {
      title: "Servicios de Cardiología SA",
      subtitle: "Medical Scheduling & Financial ETL",
      summary: "An integrated system for medical schedules and financial information processing through Excel upload and normalization.",
      description: "A solution for Servicios de Cardiología SA that centralizes physician schedules, absences, and replacements through a custom interactive calendar. It also includes a financial ETL module that receives Excel files, normalizes the data, and compares it against previously uploaded records.",
      keyFeatures: ["A custom interactive calendar for planning physician schedules.", "Requirements gathering and logical solution design.", "Tracking absences, availability, and replacements.", "Excel-file upload and normalization through an ETL process.", "Comparison of uploaded financial information for operational analysis."],
      metrics: "Centralized physician schedules and normalized financial data ready for comparison."
    }
  }
];

export const skills = {
  desarrollo: [
    { name: "Python", level: 65, tag: "Intermedio" },
    { name: "Ruby on Rails", level: 80, tag: "Avanzado" },
    { name: "React.js", level: 75, tag: "Avanzado" },
    { name: "JavaScript (ES6+)", level: 70, tag: "Intermedio" },
    { name: "HTML5 / CSS3", level: 80, tag: "Avanzado" },
    { name: "APIs RESTful", level: 95, tag: "Avanzado" }
  ],
  datos: [
    { name: "Apache Airflow", level: 70, tag: "Data Pipelines" },
    { name: "ETL / ELT", level: 80, tag: "Orquestación" },
    { name: "LangChain", level: 60, tag: "GenAI & RAG" },
    { name: "Scikit-Learn", level: 80, tag: "Machine Learning" },
    { name: "Análisis & Modelado UML", level: 90, tag: "Arquitectura" }
  ],
  basesDeDatos: [
    { name: "SQL", level: 95, tag: "Avanzado" },
    { name: "MySQL", level: 92, tag: "Avanzado" },
    { name: "Neo4j (Modelado de Grafos)", level: 60, tag: "Graph Databases" }
  ],
  infraestructura: [
    { name: "Linux (Ubuntu Avanzado)", level: 95, tag: "Terminal / Bash" },
    { name: "Git / GitHub", level: 92, tag: "Control de Versiones" },
    { name: "AWS S3", level: 80, tag: "Cloud Storage" },
    { name: "Entornos Windows Server", level: 70, tag: "Soporte SW/HW" }
  ],
  seguridad: [
    { name: "Wireshark", level: 88, tag: "Análisis de Tráfico" },
    { name: "Nmap", level: 75, tag: "Auditoría de Puertos" },
    { name: "Snort", level: 65, tag: "IDS/IPS" },
    { name: "Ettercap", level: 80, tag: "Seguridad de Red" },
    { name: "Gestión de Tickets & SLAs", level: 75, tag: "Operaciones IT" }
  ]
};

export const education = [
  {
    title: "Ingeniería en Sistemas de Información",
    institution: "Universidad Tecnológica Nacional (UTN)",
    period: "2021 — 2026",
    status: "Carrera Finalizada",
    description: "Formación de grado enfocada en ingeniería en sistemas de información, arquitectura de sistemas, bases de datos relacionales y no relacionales, gestión de proyectos y ciencias de la computación.",
    badge: "Título Grado UTN"
  },
  {
    title: "CyberSecurity 101",
    institution: "TryHackMe",
    period: "Finalizado",
    status: "Certificado",
    description: "Formación en fundamentos de ciberseguridad, seguridad web, análisis de vulnerabilidades y seguridad defensiva/ofensiva.",
    badge: "Certificación Cyber"
  },
  {
    title: "SOC Nivel 1",
    institution: "TryHackMe",
    period: "En Proceso",
    status: "Cursando",
    description: "Formación especializada para analistas de Centro de Operaciones de Seguridad (SOC), análisis de logs, respuesta ante incidentes e investigación de malware.",
    badge: "Certificación SOC"
  }
];

export const languages = [
  { language: "Español", level: "Nativo", badge: "Lengua Materna" },
  { language: "Inglés", level: "Intermedio-Alto (B2)", badge: "Profesional Técnico" }
];

export const softSkills = [
  "Resolución de problemas",
  "Resiliencia y paciencia",
  "Trabajo en equipo colaborativo",
  "Adaptabilidad al cambio",
  "Comunicación técnica efectiva",
  "Pensamiento analítico de negocio"
];
