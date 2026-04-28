/**
 * Copy for the one-page portfolio. Astro i18n serves `/` (es) and `/en/`.
 */
export type TechItem = {
  name: string;
  experience: string;
};

export type StackColumn = {
  title: string;
  color: 'accent' | 'highlight';
  items: TechItem[];
};

export type ProjectItem = {
  num: string;
  name: string;
  desc: string;
  tags: string[];
  accentTags: string[];
  url: string;
  github?: string;
  blog?: string;
};

export type HomeCopy = {
  locale: 'es' | 'en';
  htmlLang: string;
  openGraphLocale: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  personJobTitle: string;
  sectionIds: {
    stack: string;
    projects: string;
    about: string;
    contact: string;
  };
  nav: {
    homeAria: string;
    stack: string;
    projects: string;
    blog: string;
    about: string;
    contact: string;
    openMenuAria: string;
    closeMenu: string;
  };
  srOnly: { heroCanvas: string };
  ME: {
    name: string;
    tagline: string;
    years: number;
    projectCount: number;
    aiProjects: number;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    cvUrl: string;
    bio: string;
  };
  STACK: StackColumn[];
  PROJECTS: ProjectItem[];
  MARQUEE_ITEMS: string[];
  hero: {
    kickerSuffix: string;
    subtitle: string;
    ctaProjects: string;
    ctaCv: string;
    statsYears: string;
    statsProjects: string;
    statsAi: string;
    focus: string;
    philosophy: string;
    archTitle: string;
    archItems: string[];
    aiTitle: string;
  };
  stack: {
    sectionNum: string;
    title: string;
    techLine1: string;
    techLine2Suffix: string;
    hint: string;
    selectPlaceholder: string;
  };
  projects: {
    sectionNum: string;
    /** Trusted static HTML (author-controlled) for the big stacked title */
    sidebarTitleHtml: string;
    sidebarLead: string;
    sidebarCta: string;
    caseStudyLabel: string;
  };
  about: {
    sectionNum: string;
    titleLines: string[];
    values: { label: string; value: string }[];
  };
  footer: {
    kicker: string;
    /** Trusted static HTML for the large CTA heading */
    titleHtml: string;
    subtitle: string;
    socialCv: string;
    builtWith: string;
  };
  blogList: {
    title: string;
    description: string;
    totalEntries: string;
    readMore: string;
    deepDive: string;
    back: string;
    author: string;
  };
};

export const homeEs: HomeCopy = {
  locale: 'es',
  htmlLang: 'es',
  openGraphLocale: 'es_PE',
  meta: {
    title: 'Luis Farfan — Senior Full Stack Developer & AI Engineer',
    description:
      'Senior Full Stack Developer con 12 años de experiencia en Backend, Frontend, DevOps y Serverless. Especializado en IA: RAG, Agents, LLMs, embeddings y pipelines inteligentes.',
    keywords:
      'full stack developer, senior developer, devops, backend, frontend, serverless, inteligencia artificial, AI engineer, RAG, LLM, Peru, Lima',
  },
  personJobTitle: 'Senior Software Architect · Cloud & AI Expert',
  sectionIds: {
    stack: 'stack',
    projects: 'proyectos',
    about: 'sobre-mi',
    contact: 'contacto',
  },
  nav: {
    homeAria: 'Inicio',
    stack: 'Stack',
    projects: 'Proyectos IA',
    blog: 'Blog',
    about: 'Sobre mí',
    contact: 'Contactar →',
    openMenuAria: 'Abrir menú de navegación',
    closeMenu: 'Cerrar',
  },
  srOnly: {
    heroCanvas:
      'Nombre en canvas: cada letra es un mosaico de microcaracteres estilo Matrix (monospace); refuerzo tenue del nombre completo; resalte circular y celdas que se apartan ligeramente del puntero; clic = pulso y glitch breve. El encabezado para SEO está en el h1 oculto arriba.',
  },
  ME: {
    name: 'Luis Farfan',
    tagline: 'Senior Full Stack Developer & AI Engineer',
    years: 12,
    projectCount: 40,
    aiProjects: 8,
    location: 'Lima, Perú',
    email: 'hola@tudominio.com',
    github: 'https://github.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
    twitter: 'https://twitter.com/tuusuario',
    cvUrl: '/cv.pdf',
    bio: `12 años construyendo sistemas que escalan. No me especializo en una capa
— domino el stack completo porque los mejores productos nacen cuando la misma
mente diseña el backend, el frontend y la infraestructura.

En el último año me sumergí en IA: no solo integrar APIs, sino entender
embeddings, vectores, agentes, RAG y fine-tuning. Construyo productos que piensan.`,
  },
  STACK: [
    {
      title: 'Frontend',
      color: 'accent',
      items: [
        { name: 'Angular ❤️', experience: 'Mi framework favorito para aplicaciones empresariales de gran escala. He dominado su evolución desde las versiones alfa hasta las más recientes.' },
        { name: 'React / Next.js', experience: 'Indispensable para interfaces modernas de alto rendimiento, dashboards complejos y sitios interactivos con animaciones fluidas.' },
        { name: 'Vue.js', experience: 'Utilizado para construir aplicaciones ligeras y reactivas con un enfoque en la simplicidad y el rendimiento.' },
        { name: 'Astro', experience: 'Mi elección para sitios web ultra rápidos centrados en el contenido, aprovechando su arquitectura de islas.' },
        { name: 'TypeScript', experience: 'El estándar de oro en mi flujo de trabajo para garantizar código robusto, escalable y libre de errores en tiempo de ejecución.' },
        { name: 'Tailwind CSS', experience: 'Diseño atómico y responsivo que me permite iterar visualmente a una velocidad increíble manteniendo la consistencia.' },
      ],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: [
        { name: 'Python (FastAPI / Django / Celery)', experience: 'Dominio profundo del ecosistema Python para APIs de alto rendimiento, sistemas complejos y procesamiento asíncrono.' },
        { name: 'NestJS', experience: 'Construcción de aplicaciones escalables y mantenibles en el lado del servidor usando arquitectura modular en Node.js.' },
        { name: 'Go', experience: 'Desarrollo de microservicios y sistemas distribuidos de alto rendimiento y baja latencia.' },
        { name: 'Node.js / Bun', experience: 'Construcción de servicios altamente concurrentes y tooling moderno para el ecosistema Javascript.' },
      ],
    },
    {
      title: 'Bases de Datos',
      color: 'accent',
      items: [
        { name: 'PostgreSQL / pgvector', experience: 'Mi base relacional de confianza, optimizada para búsquedas vectoriales críticas en aplicaciones de IA.' },
        { name: 'ChromaDB', experience: 'Especialista en bases de datos vectoriales para almacenamiento y recuperación eficiente de embeddings en sistemas RAG.' },
        { name: 'DynamoDB / Firestore', experience: 'Bases de datos NoSQL escalables para aplicaciones distribuidas con latencia de milisegundos.' },
        { name: 'MongoDB', experience: 'Manejo de documentos flexibles para prototipado rápido y aplicaciones de gran volumen de datos.' },
        { name: 'Redis / Redis Streams', experience: 'Más que un caché: uso Redis para streaming de datos, colas de prioridad y gestión de estado distribuido.' },
      ],
    },
    {
      title: 'Messaging & Events',
      color: 'accent',
      items: [
        { name: 'Redis Streams / PubSub', experience: 'Comunicación en tiempo real y procesamiento de flujos de datos con baja latencia.' },
        { name: 'SNS + SQS', experience: 'Arquitecturas desacopladas en AWS que garantizan la entrega de mensajes y la resiliencia.' },
        { name: 'Kafka / RabbitMQ', experience: 'Manejo de flujos de datos masivos y comunicación compleja entre microservicios.' },
      ],
    },
    {
      title: 'Serverless & Cloud',
      color: 'accent',
      items: [
        { name: 'AWS (Lambda, Step Functions, SQS)', experience: 'Diseño de flujos de trabajo serverless complejos y orquestación de tareas en la nube de Amazon.' },
        { name: 'GCP (Cloud Run, BigQuery, Workflows)', experience: 'Despliegue de contenedores y automatización de procesos a gran escala en Google Cloud.' },
        { name: 'Cloud Functions / PubSub', experience: 'Ejecución de lógica basada en eventos de forma escalable en entornos GCP.' },
      ],
    },
    {
      title: 'AI — especialidad',
      color: 'highlight',
      items: [
        { name: 'RUFLO', experience: 'Orquestación avanzada de agentes y flujos de trabajo inteligentes personalizados.' },
        { name: 'CrewAI / LangChain', experience: 'Frameworks para la creación y gestión de sistemas multi-agente que colaboran autónomamente.' },
        { name: 'MCP (Model Context Protocol)', experience: 'Conexión estandarizada de LLMs con herramientas y fuentes de datos externas de forma segura.' },
        { name: 'RAG · Embeddings', experience: 'Arquitecturas avanzadas para que las IAs respondan con precisión usando tus propios documentos.' },
        { name: 'Orquestación de Agentes', experience: 'Diseño de sistemas que razonan, planifican y ejecutan tareas complejas de principio a fin.' },
      ],
    },
  ],
  PROJECTS: [
    {
      num: '001',
      name: 'CodeReborn Engine',
      desc: 'Motor de orquestación multi-agente para análisis de código legado. Usa CrewAI, Tree-sitter y MCP para transformar repositorios complejos en conocimiento estructurado.',
      tags: ['AI Orchestration', 'CrewAI', 'Tree-sitter', 'Python'],
      accentTags: ['AI Orchestration', 'CrewAI'],
      url: '#',
      github: 'https://github.com/luisfarfan/codereborn-engine',
      blog: '/blog/codereborn-engine',
    },
    {
      num: '002',
      name: 'Lucho Ecommerce',
      desc: 'Plataforma e-commerce multi-tenant con integración profunda de SUNAT y facturación electrónica crítica. Arquitectura modular escalable con FastAPI y Redis.',
      tags: ['Multi-tenancy', 'FastAPI', 'SUNAT', 'Redis'],
      accentTags: ['Multi-tenancy', 'SUNAT'],
      url: '#',
      github: '',
      blog: '/blog/lucho-ecommerce',
    },
    {
      num: '003',
      name: 'DevHub Tauri',
      desc: 'Dashboard de gestión para desarrolladores construido con Tauri y Rust. Optimización de performance nativa y gestión de flujos de trabajo locales.',
      tags: ['Tauri', 'Rust', 'React', 'Desktop'],
      accentTags: ['Tauri', 'Rust'],
      url: '#',
      github: 'https://github.com/luisfarfan/my-dev-dock',
      blog: '/blog/devhub-tauri',
    },
    {
      num: '004',
      name: 'FuZo (Futbol Manager)',
      desc: 'Sistema de gestión deportiva con microservicios en Node.js. Manejo de alta concurrencia para estadísticas en tiempo real y gestión de torneos.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
      accentTags: ['Node.js', 'Microservices'],
      url: '#',
      github: '',
      blog: '/blog/fuzo',
    },
    {
      num: '005',
      name: 'Auto-reel',
      desc: 'Plataforma de automatización de contenido impulsada por IA. Genera videos técnicos, Shorts y posts de Twitter usando FastAPI, React y Remotion.',
      tags: ['AI Automation', 'Remotion', 'FastAPI', 'Python'],
      accentTags: ['AI Automation', 'Remotion'],
      url: '#',
      github: 'https://github.com/luisfarfan/auto-reel',
      blog: '/blog/auto-reel',
    },
  ],
  MARQUEE_ITEMS: [
    'React',
    'Node.js',
    'AWS Lambda',
    'Docker',
    'LangChain',
    'PostgreSQL',
    'Terraform',
    'OpenAI API',
    'Kubernetes',
    'TypeScript',
    'RAG · Embeddings',
    'CI/CD',
    'Python',
    'Redis',
    'MCP Agents',
  ],
  hero: {
    kickerSuffix: 'años',
    subtitle: `<strong style="color:var(--ink);">Full-stack senior</strong>, experto en frontend y backend, con experiencia comprobada diseñando y operando sistemas en <strong style="color:var(--ink);">AWS y GCP</strong>.<span class="block h-3"></span>Especializado en arquitecturas <strong style="color:var(--ink);">serverless</strong>, sistemas orientados a eventos e <strong style="color:var(--ink);">infraestructura como código</strong>.<span class="block h-3"></span>He desarrollado múltiples plataformas escalables y actualmente construyo <strong style="color:var(--ink);">sistemas multi-agente con IA</strong> que automatizan, analizan y ejecutan procesos reales.<span class="block h-3"></span><strong style="color:var(--ink);">12+ años</strong> en tecnología. <strong style="color:var(--ink);">3 años</strong> liderando equipos.<span class="block h-3"></span>En el último año me he enfocado intensamente en <strong style="color:var(--ink);">Inteligencia Artificial</strong>, diseñando sistemas avanzados de orquestación multi-agente, integración de múltiples LLMs (cloud y locales) y automatización end-to-end de procesos complejos.`,
    ctaProjects: 'Ver proyectos ↓',
    ctaCv: 'Descargar CV',
    statsYears: 'Años exp.',
    statsProjects: 'Proyectos',
    statsAi: 'Proyectos IA',
    focus: 'Agentes Autónomos · MCP · RAG',
    philosophy: 'Construyendo sistemas autónomos que piensan y proyectan escalabilidad real.',
    archTitle: 'Cimientos de Arquitectura',
    archItems: ['Architecture & Design Patterns', 'Serverless', 'Cloud Native', 'Distributed Systems'],
    aiTitle: 'Especialidad IA',
  },
  stack: {
    sectionNum: '01 —',
    title: 'Stack completo',
    techLine1: 'Trayectoria técnica consolidada',
    techLine2Suffix: 'tecnologías dominadas',
    hint: 'Selecciona una tecnología para explorar el contexto de arquitectura',
    selectPlaceholder: '// Selecciona una tecnología',
  },
  projects: {
    sectionNum: '02 — Proyectos',
    sidebarTitleHtml:
      'Último<br /><span style="color:var(--accent);">año</span><br />en IA',
    sidebarLead:
      'Proyectos reales que resuelven problemas reales, usando los modelos más potentes del momento.',
    sidebarCta: 'Ver en GitHub →',
    caseStudyLabel: 'Caso de Estudio',
  },
  about: {
    sectionNum: '03 — Sobre mí',
    titleLines: ['Arquitecto.', 'Builder.', 'IA nerd.'],
    values: [
      { label: 'Disponibilidad', value: 'Freelance · Full-time' },
      { label: 'Ubicación', value: 'Lima, Perú' },
      { label: 'Idiomas', value: 'Español · Inglés B2' },
      { label: 'Zona horaria', value: 'GMT-5 (Lima)' },
    ],
  },
  footer: {
    kicker: '// Hablemos',
    titleHtml:
      '¿Construimos<br /><span style="color:var(--paper);">algo</span><br /><em style="color:var(--accent); font-style:normal;">increíble</em>?',
    subtitle: 'Disponible para proyectos freelance · posiciones senior · consultoría IA',
    socialCv: 'CV PDF',
    builtWith: 'Hecho con Astro + Pretext.js · Lima, Perú',
  },
  blogList: {
    title: 'Detrás del código',
    description: 'Aquí comparto mis retos técnicos, experimentos con IA y las lecciones que aprendo construyendo sistemas reales.',
    totalEntries: 'Post publicados',
    readMore: 'Leer artículo',
    deepDive: 'Inmersión Técnica',
    back: 'Volver',
    author: 'Autor',
  },
};

export const homeEn: HomeCopy = {
  locale: 'en',
  htmlLang: 'en',
  openGraphLocale: 'en_US',
  meta: {
    title: 'Luis Farfan — Senior Full Stack Developer & AI Engineer',
    description:
      'Senior full stack engineer with 12 years across backend, frontend, DevOps, and serverless. AI focus: RAG, agents, LLMs, embeddings, and production-grade ML pipelines.',
    keywords:
      'full stack developer, senior engineer, devops, backend, frontend, serverless, artificial intelligence, AI engineer, RAG, LLM, Peru, Lima',
  },
  personJobTitle: 'Senior Software Architect · Cloud & AI Expert',
  sectionIds: {
    stack: 'stack',
    projects: 'projects',
    about: 'about',
    contact: 'contact',
  },
  nav: {
    homeAria: 'Home',
    stack: 'Stack',
    projects: 'AI projects',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact →',
    openMenuAria: 'Open navigation menu',
    closeMenu: 'Close',
  },
  srOnly: {
    heroCanvas:
      'Name on canvas: each letter is a Matrix-style micro-glyph mosaic (monospace); faint full-name underlay; circular highlight and cells nudge slightly from the pointer; click = pulse and short glitch. The SEO heading is in the screen-reader-only h1 above.',
  },
  ME: {
    name: 'Luis Farfan',
    tagline: 'Senior Full Stack Developer & AI Engineer',
    years: 12,
    projectCount: 40,
    aiProjects: 8,
    location: 'Lima, Peru',
    email: 'hello@yourdomain.com',
    github: 'https://github.com/youruser',
    linkedin: 'https://linkedin.com/in/youruser',
    twitter: 'https://twitter.com/youruser',
    cvUrl: '/cv.pdf',
    bio: `Twelve years shipping systems that scale. I do not overspecialize in one layer
—I own the full stack because the strongest products are shaped by the same mind
across backend, frontend, and infrastructure.

Over the past year I went deep on AI: not just wiring APIs, but embeddings, vectors,
agents, RAG, and fine-tuning. I build products that think.`,
  },
  STACK: [
    {
      title: 'Frontend',
      color: 'accent',
      items: [
        { name: 'Angular ❤️', experience: 'My favorite framework for large-scale enterprise applications. I have mastered its evolution from alpha versions to the latest releases.' },
        { name: 'React / Next.js', experience: 'Indispensable for high-performance modern interfaces, complex dashboards, and interactive sites with smooth animations.' },
        { name: 'Vue.js', experience: 'Used to build lightweight and reactive applications with a focus on simplicity and performance.' },
        { name: 'Astro', experience: 'My choice for ultra-fast, content-focused websites, leveraging its islands architecture.' },
        { name: 'TypeScript', experience: 'The gold standard in my workflow to ensure robust, scalable, and runtime error-free code.' },
        { name: 'Tailwind CSS', experience: 'Atomic and responsive design that allows me to iterate visually at incredible speed while maintaining consistency.' },
      ],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: [
        { name: 'Python (FastAPI / Django / Celery)', experience: 'Deep mastery of the Python ecosystem for high-performance APIs, complex systems, and asynchronous processing.' },
        { name: 'NestJS', experience: 'Building scalable and maintainable server-side applications using modular architecture in Node.js.' },
        { name: 'Go', experience: 'Development of high-performance and low-latency microservices and distributed systems.' },
        { name: 'Node.js / Bun', experience: 'Building highly concurrent services and modern tooling for the JavaScript ecosystem.' },
      ],
    },
    {
      title: 'Databases',
      color: 'accent',
      items: [
        { name: 'PostgreSQL / pgvector', experience: 'My trusted relational database, optimized for critical vector searches in AI applications.' },
        { name: 'ChromaDB', experience: 'Specialist in vector databases for efficient embedding storage and retrieval in RAG systems.' },
        { name: 'DynamoDB / Firestore', experience: 'Scalable NoSQL databases for distributed applications with millisecond latency.' },
        { name: 'MongoDB', experience: 'Flexible document handling for rapid prototyping and high-volume data applications.' },
        { name: 'Redis / Redis Streams', experience: 'More than a cache: I use Redis for data streaming, priority queues, and distributed state management.' },
      ],
    },
    {
      title: 'Messaging & Events',
      color: 'accent',
      items: [
        { name: 'Redis Streams / PubSub', experience: 'Real-time communication and processing of data flows with low latency.' },
        { name: 'SNS + SQS', experience: 'Decoupled architectures on AWS that guarantee message delivery and resilience.' },
        { name: 'Kafka / RabbitMQ', experience: 'Handling massive data flows and complex communication between microservices.' },
      ],
    },
    {
      title: 'Serverless & Cloud',
      color: 'accent',
      items: [
        { name: 'AWS (Lambda, Step Functions, SQS)', experience: 'Designing complex serverless workflows and task orchestration in the Amazon cloud.' },
        { name: 'GCP (Cloud Run, BigQuery, Workflows)', experience: 'Container deployment and process automation at scale on Google Cloud.' },
        { name: 'Cloud Functions / PubSub', experience: 'Execution of event-based logic scalably in GCP environments.' },
      ],
    },
    {
      title: 'AI — focus',
      color: 'highlight',
      items: [
        { name: 'RUFLO', experience: 'Advanced orchestration of agents and personalized intelligent workflows.' },
        { name: 'CrewAI / LangChain', experience: 'Frameworks for creating and managing multi-agent systems that collaborate autonomously.' },
        { name: 'MCP (Model Context Protocol)', experience: 'Standardized connection of LLMs with external tools and data sources securely.' },
        { name: 'RAG · Embeddings', experience: 'Advanced architectures for AIs to respond with precision using your own documents.' },
        { name: 'Agent Orchestration', experience: 'Designing systems that reason, plan, and execute complex tasks from start to finish.' },
      ],
    },
  ],
  PROJECTS: [
    {
      num: '001',
      name: 'CodeReborn Engine',
      desc: 'Multi-agent orchestration engine for legacy code analysis. Uses CrewAI, Tree-sitter, and MCP to transform complex repositories into structured knowledge.',
      tags: ['AI Orchestration', 'CrewAI', 'Tree-sitter', 'Python'],
      accentTags: ['AI Orchestration', 'CrewAI'],
      url: '#',
      github: 'https://github.com/luisfarfan/codereborn-engine',
      blog: '/en/blog/codereborn-engine',
    },
    {
      num: '002',
      name: 'Lucho Ecommerce',
      desc: 'Multi-tenant e-commerce platform with deep SUNAT integration and critical electronic invoicing. Scalable modular architecture with FastAPI and Redis.',
      tags: ['Multi-tenancy', 'FastAPI', 'SUNAT', 'Redis'],
      accentTags: ['Multi-tenancy', 'SUNAT'],
      url: '#',
      github: '',
      blog: '/en/blog/lucho-ecommerce',
    },
    {
      num: '003',
      name: 'DevHub Tauri',
      desc: 'Developer management dashboard built with Tauri and Rust. Native performance optimization and local workflow management.',
      tags: ['Tauri', 'Rust', 'React', 'Desktop'],
      accentTags: ['Tauri', 'Rust'],
      url: '#',
      github: 'https://github.com/luisfarfan/my-dev-dock',
      blog: '/en/blog/devhub-tauri',
    },
    {
      num: '004',
      name: 'FuZo (Football Manager)',
      desc: 'Sports management system with Node.js microservices. High concurrency handling for real-time statistics and tournament management.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
      accentTags: ['Node.js', 'Microservices'],
      url: '#',
      github: '',
      blog: '/en/blog/fuzo',
    },
    {
      num: '005',
      name: 'Auto-reel',
      desc: 'AI-powered content automation platform. Generates tech videos, Shorts, and Twitter posts using FastAPI, React, and Remotion.',
      tags: ['AI Automation', 'Remotion', 'FastAPI', 'Python'],
      accentTags: ['AI Automation', 'Remotion'],
      url: '#',
      github: 'https://github.com/luisfarfan/auto-reel',
      blog: '/en/blog/auto-reel',
    },
  ],
  MARQUEE_ITEMS: homeEs.MARQUEE_ITEMS,
  hero: {
    kickerSuffix: 'yrs',
    subtitle: `Senior Architect with 12 years of end-to-end mastery.<br>
Expert in <strong style="color:var(--ink);">software architecture, design patterns, and Cloud Serverless</strong> solutions. Lately focused on Generative AI: engineering autonomous agents and RAG systems.`,
    ctaProjects: 'View projects ↓',
    ctaCv: 'Download CV',
    statsYears: 'Years exp.',
    statsProjects: 'Projects',
    statsAi: 'AI projects',
    focus: 'Autonomous Agents · MCP · RAG',
    philosophy: 'Building autonomous systems that think and scale with architectural rigor.',
    archTitle: 'Architecture Foundations',
    archItems: ['Architecture & Design Patterns', 'Serverless', 'Cloud Native', 'Distributed Systems'],
    aiTitle: 'AI Specialization',
  },
  stack: {
    sectionNum: '01 —',
    title: 'Full stack',
    techLine1: 'Consolidated technical background',
    techLine2Suffix: 'technologies mastered',
    hint: 'Select a technology to explore its architecture context',
    selectPlaceholder: '// Select a technology',
  },
  projects: {
    sectionNum: '02 — Projects',
    sidebarTitleHtml:
      'Past<br /><span style="color:var(--accent);">year</span><br />in AI',
    sidebarLead: 'Real projects solving real problems with the strongest models available today.',
    sidebarCta: 'View on GitHub →',
    caseStudyLabel: 'Case Study',
  },
  about: {
    sectionNum: '03 — About',
    titleLines: ['Architect.', 'Builder.', 'AI nerd.'],
    values: [
      { label: 'Availability', value: 'Freelance · Full-time' },
      { label: 'Location', value: 'Lima, Peru' },
      { label: 'Languages', value: 'Spanish · English B2' },
      { label: 'Time zone', value: 'GMT-5 (Lima)' },
    ],
  },
  footer: {
    kicker: "// Let's talk",
    titleHtml:
      'Shall we build<br /><span style="color:var(--paper);">something</span><br /><em style="color:var(--accent); font-style:normal;">remarkable</em>?',
    subtitle: 'Available for freelance · senior roles · AI consulting',
    socialCv: 'Résumé PDF',
    builtWith: 'Built with Astro + Pretext.js · Lima, Peru',
  },
  blogList: {
    title: 'Behind the code',
    description: 'Sharing my technical challenges, AI experiments, and the lessons learned from building real-world systems.',
    totalEntries: 'Published posts',
    readMore: 'Read article',
    deepDive: 'Technical Deep Dive',
    back: 'Back',
    author: 'Author',
  },
};
