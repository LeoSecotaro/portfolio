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
  cvPath: "/Leonardo_Secotaro_CV_Unificado.pdf",
  statusBadge: "Disponible para Desafíos Full Stack & Data",
  summary: `Ingeniero en Sistemas de Información con una formación integral orientada al desarrollo web full stack, ingeniería de datos, arquitectura de soluciones y ciberseguridad. Especializado en la creación de aplicaciones dinámicas y escalables utilizando Python, Ruby on Rails y React.js. Cuenta con amplia experiencia en pipelines ETL automatizados, integración de modelos de lenguaje (RAG / LLMs), bases de datos SQL y de grafos (Neo4j), así como monitoreo SOC e infraestructura tecnológica under metodologías ágiles.`
};

export const keyPillars = [
  {
    id: "01",
    title: "Desarrollo Full Stack",
    description: "Creación de aplicaciones web modernas, robustas y de alto rendimiento utilizando React.js en el frontend y Python / Ruby on Rails en el backend.",
    icon: "Code2",
    badge: "React · Rails · Python"
  },
  {
    id: "02",
    title: "Ingeniería de Datos & RAG",
    description: "Diseño de pipelines ETL automatizados con Apache Airflow, modelado de grafos con Neo4j y recuperación contextual RAG con LangChain y LLMs.",
    icon: "DatabaseZap",
    badge: "Airflow · Neo4j · LangChain"
  },
  {
    id: "03",
    title: "Bases de Datos & SQL",
    description: "Modelado lógico y físico de arquitecturas de bases de datos relacionales y no relacionales, optimizando consultas complejas para analítica financiera y operaciones.",
    icon: "ServerCog",
    badge: "SQL · MySQL · Neo4j"
  },
  {
    id: "04",
    title: "Infraestructura & SOC",
    description: "Monitoreo de tráfico de red, análisis de vulnerabilidades (Nmap, Wireshark, Snort, Ettercap) y administración avanzada de entornos Linux (Ubuntu).",
    icon: "ShieldCheck",
    badge: "SOC N1 · Wireshark · Linux"
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
    techStack: ["React.js", "Ruby On Rails", "CI/CD", "Linux (Ubuntu)", "REST APIs", "SQL"]
  },
  {
    id: "cardiologia-valle",
    role: "Desarrollador Full Stack & Data Analyst",
    company: "Cardiología del Valle",
    period: "Enero 2026 — Marzo 2026",
    location: "Mendoza, Argentina",
    badge: "Salud & Financiero",
    description: "Construcción de sistemas en tiempo real para turnos médicos y procesamiento de métricas financieras.",
    bulletPoints: [
      "Desarrollo end-to-end, relevamiento de requerimientos y diseño lógico de un sistema integral de gestión de turnos médicos interactivo y en tiempo real.",
      "Extracción, transformación y estructuración de datos (ETL) para la construcción de un módulo de comparación de métricas financieras.",
      "Desarrollo de consultas SQL eficientes integradas a la visualización del frontend para generar reportes estratégicos decisionales.",
      "Soporte, mantenimiento y monitoreo de los sistemas internos, garantizando la continuidad operativa de la infraestructura y atención de incidencias."
    ],
    techStack: ["React.js", "SQL / MySQL", "", "ETL", "Monitoreo de Redes"]
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
    metrics: "Arquitectura Cliente-Servidor decoupled con 100% de vistas responsivas.",
    gradient: "from-blue-600 to-indigo-600",
    icon: "Home"
  },
  {
    id: "rag-system",
    title: "Sistema RAG Acoplado a Grafos",
    subtitle: "Retrieval-Augmented Generation & Neo4j",
    category: "Datos e IA",
    badge: "AI / GenAI & Grafos",
    summary: "Sistema inteligente de recuperación de información académica y planes de estudio mediante lenguaje natural.",
    description: "Plataforma que combina el modelado de grafos del conocimiento en Neo4j con la integración de modelos de lenguaje (LLM) locales mediante Python y LangChain. Permite consultar correlativas, dependencias y normativas académicas con respuestas libres de alucinaciones.",
    keyFeatures: [
      "Modelado conceptual de grafos en Neo4j para mapear entidades y relaciones complejas.",
      "Integración de LangChain y LLMs locales para la generación contextual en lenguaje natural.",
      "Consultas avanzadas Cypher para navegar nodos de asignaturas y correlatividades.",
      "Vectorstore y retriever optimizados para alta precisión de respuesta."
    ],
    techStack: ["Python", "LangChain", "Neo4j (GraphDB)", "LLMs Locales", "Vector Stores"],
    metrics: "Respuestas contextuales en tiempo real sobre la totalidad del plan de estudios UTN.",
    gradient: "from-purple-600 to-pink-600",
    icon: "BrainCircuit"
  },
  {
    id: "etl-pipeline",
    title: "Pipeline de Datos Automatizado (ETL)",
    subtitle: "Apache Airflow & API TMDB",
    category: "Datos e IA",
    badge: "Data Engineering",
    summary: "Orquestación de flujos de trabajo distribuido para procesar más de 10,000 registros cinemáticos.",
    description: "Pipeline de ingeniería de datos automatizado que extrae, limpia y transforma datos masivos provenientes de la API REST de TMDB. Diseñado para preparar datasets limpios dirigidos a modelos de entrenamiento de Machine Learning con Scikit-learn.",
    keyFeatures: [
      "Orquestación y programación de DAGs en Apache Airflow.",
      "Extracción masiva y manejo de paginación/rate limits en API REST TMDB (+10,000 registros).",
      "Limpieza, normalización e imputación de valores faltantes mediante Python & Pandas.",
      "Transformación y estructuración de datos para algoritmos de Scikit-Learn."
    ],
    techStack: ["Apache Airflow", "Python", "Pandas", "Scikit-Learn", "REST API", "ETL"],
    metrics: "Procesamiento de >10,000 registros con automatización de ejecuciones programadas.",
    gradient: "from-amber-500 to-rose-500",
    icon: "Workflow"
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
    icon: "ShieldAlert"
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
    description: "Formación de grado enfocada en ingeniería de software, arquitectura de sistemas, bases de datos relacionales/no-relacionales, gestión de proyectos y ciencias de la computación.",
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
  "Resiliencia y Paciencia",
  "Trabajo en equipo colaborativo",
  "Adaptabilidad al cambio",
  "Comunicación técnica efectiva",
  "Pensamiento analítico de negocios"
];
