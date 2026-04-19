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
  stack: { sectionNum: string; title: string };
// ... (omitted text for brevity, applying to the whole file)
  projects: {
    sectionNum: string;
    /** Trusted static HTML (author-controlled) for the big stacked title */
    sidebarTitleHtml: string;
    sidebarLead: string;
    sidebarCta: string;
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
        { name: 'React / Next.js', experience: 'Mi tecnología principal para interfaces premium. He construido desde dashboards complejos hasta sitios altamente interactivos como este, enfocándome en performance, animaciones fluidas y accesibilidad.' },
        { name: 'TypeScript', experience: 'Indispensable en mi flujo de trabajo. Me permite escalar aplicaciones de gran tamaño con seguridad, reduciendo errores en tiempo de ejecución y mejorando la mantenibilidad del código a largo plazo.' },
        { name: 'Tailwind CSS', experience: 'Lo uso para iterar rápido sin sacrificar la calidad del diseño. Me permite crear sistemas de diseño consistentes y responsivos con una precisión de píxel.' },
        { name: 'Angular', experience: 'Me inicié con Typescript y al mismo tiempo conocí Angular en su versión alfa. He visto su evolución completa, usándolo en aplicaciones empresariales robustas y críticas.' },
        { name: 'WebGL / Canvas', experience: 'Donde la programación se vuelve arte. Uso Canvas para experiencias como la cabecera de este sitio, creando efectos visuales que el CSS estándar no puede alcanzar.' },
      ],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: [
        { name: 'Node.js / Bun', experience: 'Mi motor favorito para el lado del servidor. Experto en construir APIs de alto rendimiento y sistemas en tiempo real altamente concurrentes.' },
        { name: 'Python / FastAPI', experience: 'Mi elección principal para todo lo relacionado con IA y procesamiento de datos. FastAPI me permite desplegar modelos y servicios con una velocidad increíble.' },
        { name: 'PostgreSQL', experience: 'Mi base de datos relacional de confianza. Dominio de optimización de queries, diseño de esquemas complejos y extensiones como pgvector para IA.' },
        { name: 'Redis', experience: 'Utilizado para caching de alta velocidad, colas de mensajes y gestión de estados de sesión en aplicaciones distribuidas.' },
        { name: 'GraphQL', experience: 'Implementación de capas de datos eficientes que permiten a los clientes front-end obtener exactamente lo que necesitan, optimizando el ancho de banda y la velocidad.' },
      ],
    },
    {
      title: 'DevOps',
      color: 'accent',
      items: [
        { name: 'Docker / K8s', experience: 'Contenerización y orquestación para asegurar que el software corra igual en mi máquina que en producción. Experiencia en clusters escalables.' },
        { name: 'Terraform', experience: 'Infraestructura como código. Mantengo mis entornos de nube de forma reproducible, versionada y segura.' },
        { name: 'GitHub Actions', experience: 'Automatización total del ciclo de vida del software, desde tests automáticos hasta despliegues continuos en múltiples entornos.' },
        { name: 'Datadog', experience: 'Observabilidad crítica para sistemas senior. Monitoreo de logs, métricas y trazas para detectar problemas antes de que afecten al usuario.' },
      ],
    },
    {
      title: 'Serverless / Cloud',
      color: 'accent',
      items: [
        { name: 'AWS Lambda', experience: 'Especialista en arquitecturas orientadas a eventos. He diseñado sistemas que procesan millones de peticiones sin gestionar un solo servidor.' },
        { name: 'Cloudflare Workers', experience: 'Ejecución en el borde (edge) para latencia ultra-baja. Ideal para personalización de contenido y seguridad global.' },
        { name: 'Step Functions', experience: 'Orquestación de flujos de trabajo complejos y resilientes en AWS, manejando retries y estados de forma nativa.' },
      ],
    },
    {
      title: 'IA — especialidad',
      color: 'highlight',
      items: [
        { name: 'Autonomous Agents', experience: 'Mi foco actual más fuerte. Desarrollo agentes capaces de razonar, usar herramientas y ejecutar tareas complejas de forma autónoma.' },
        { name: 'MCP (Model Context Protocol)', experience: 'Pionero en la implementación de MCP para conectar LLMs con datos y herramientas de forma estandarizada y segura.' },
        { name: 'RAG · Embeddings', experience: 'Arquitecturas de recuperación aumentada para que las IAs hablen con tus datos propios, con precisión y sin alucinaciones.' },
        { name: 'Fine-tuning', experience: 'Ajuste fino de modelos para casos de uso específicos donde las instrucciones generales no son suficientes. Especializado en dominios verticales.' },
      ],
    },
  ],
  PROJECTS: [
    {
      num: '001',
      name: 'AI Document Pipeline',
      desc: 'Procesamiento inteligente de documentos legales con extracción estructurada, clasificación automática y búsqueda semántica sobre miles de PDFs en tiempo real.',
      tags: ['RAG', 'LangChain', 'AWS Lambda', 'PostgreSQL + pgvector'],
      accentTags: ['RAG', 'LangChain'],
      url: '#',
    },
    {
      num: '002',
      name: 'Autonomous AI Agent',
      desc: 'Agente multi-step con memoria persistente, uso de herramientas externas, ejecución de código y auto-reflexión. Integración con MCP para 20+ tools.',
      tags: ['MCP', 'Claude API', 'Node.js', 'Redis', 'Docker'],
      accentTags: ['MCP', 'Claude API'],
      url: '#',
    },
    {
      num: '003',
      name: 'Realtime AI Chat Platform',
      desc: 'Plataforma de chat enterprise con streaming de tokens sin layout shift. Usa Pretext.js para calcular alturas de burbujas predictivamente — 0 reflows.',
      tags: ['Pretext.js', 'OpenAI Streaming', 'React', 'Serverless'],
      accentTags: ['Pretext.js', 'OpenAI Streaming'],
      url: '#',
    },
    {
      num: '004',
      name: 'Fine-tuned Domain Model',
      desc: 'Fine-tuning de LLM base para dominio específico de e-commerce. Datos sintéticos, RLHF simplificado y evaluación automática. 40% mejora vs modelo base.',
      tags: ['Fine-tuning', 'Python', 'FastAPI', 'AWS SageMaker'],
      accentTags: ['Fine-tuning'],
      url: '#',
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
    subtitle: `Arquitecto Senior con 12 años dominando el stack completo.<br>
Experto en <strong style="color:var(--ink);">Arquitectura, Patrones, Serverless y Cloud</strong>. Este último año, mi foco es la IA Generativa: construyo agentes autónomos y sistemas RAG.`,
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
  stack: { sectionNum: '01 —', title: 'Stack completo' },
  projects: {
    sectionNum: '02 — Proyectos',
    sidebarTitleHtml:
      'Último<br /><span style="color:var(--accent);">año</span><br />en IA',
    sidebarLead:
      'Proyectos reales que resuelven problemas reales, usando los modelos más potentes del momento.',
    sidebarCta: 'Ver en GitHub →',
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
        { name: 'React / Next.js', experience: 'My primary stack for premium interfaces. I build everything from complex dashboards to highly interactive sites like this one, focusing on performance, smooth animations, and accessibility.' },
        { name: 'TypeScript', experience: 'Indispensable in my workflow. It allows me to scale large applications safely, reducing runtime errors and improving long-term maintainability.' },
        { name: 'Tailwind CSS', experience: "I use it to iterate fast without sacrificing design quality. It allows me to create consistent, responsive design systems with pixel-perfect precision." },
        { name: 'Angular', experience: 'I started with TypeScript and met Angular in its alpha version. I have seen its full evolution, using it in robust and critical enterprise applications.' },
        { name: 'WebGL / Canvas', experience: "Where programming meets art. I use Canvas for experiences like this site's header, creating visual effects that standard CSS cannot reach." },
      ],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: [
        { name: 'Node.js / Bun', experience: 'My favorite engine for the server side. Expert in building high-performance APIs and highly concurrent real-time systems.' },
        { name: 'Python / FastAPI', experience: 'My main choice for everything AI and data processing. FastAPI allows me to deploy models and services with incredible speed.' },
        { name: 'PostgreSQL', experience: 'My trusted relational database. Mastery of query optimization, complex schema design, and extensions like pgvector for AI.' },
        { name: 'Redis', experience: 'Used for high-speed caching, message queues, and session state management in distributed applications.' },
        { name: 'GraphQL', experience: 'Implementation of efficient data layers that allow frontend clients to get exactly what they need, optimizing bandwidth and speed.' },
      ],
    },
    {
      title: 'DevOps',
      color: 'accent',
      items: [
        { name: 'Docker / K8s', experience: 'Containerization and orchestration to ensure software runs the same on my machine as in production. Experience with scalable clusters.' },
        { name: 'Terraform', experience: 'Infrastructure as Code. I maintain my cloud environments in a reproducible, versioned, and secure way.' },
        { name: 'GitHub Actions', experience: 'Full automation of the software lifecycle, from automated tests to continuous deployments in multiple environments.' },
        { name: 'Datadog', experience: 'Critical observability for senior systems. Monitoring logs, metrics, and traces to detect issues before they affect the user.' },
      ],
    },
    {
      title: 'Serverless / Cloud',
      color: 'accent',
      items: [
        { name: 'AWS Lambda', experience: 'Specialist in event-driven architectures. I have designed systems that process millions of requests without managing a single server.' },
        { name: 'Cloudflare Workers', experience: 'Edge execution for ultra-low latency. Ideal for content personalization and global security.' },
        { name: 'Step Functions', experience: 'Orchestration of complex and resilient workflows in AWS, handling retries and states natively.' },
      ],
    },
    {
      title: 'AI — focus',
      color: 'highlight',
      items: [
        { name: 'Autonomous Agents', experience: 'My strongest current focus. I develop agents capable of reasoning, using tools, and executing complex tasks autonomously.' },
        { name: 'MCP (Model Context Protocol)', experience: 'Pioneer in implementing MCP to connect LLMs with data and tools in a standardized and secure way.' },
        { name: 'RAG · Embeddings', experience: 'Retrieval-augmented architectures to make AI speak with your own data, accurately and without hallucinations.' },
        { name: 'Fine-tuning', experience: 'Fine-tuning base models for specific use cases where general instructions are not enough. Specialized in vertical domains.' },
      ],
    },
  ],
  PROJECTS: [
    {
      num: '001',
      name: 'AI Document Pipeline',
      desc: 'Intelligent processing of legal documents with structured extraction, automatic classification, and semantic search across thousands of PDFs in real time.',
      tags: ['RAG', 'LangChain', 'AWS Lambda', 'PostgreSQL + pgvector'],
      accentTags: ['RAG', 'LangChain'],
      url: '#',
    },
    {
      num: '002',
      name: 'Autonomous AI Agent',
      desc: 'Multi-step agent with persistent memory, external tools, code execution, and self-reflection. MCP integration for 20+ tools.',
      tags: ['MCP', 'Claude API', 'Node.js', 'Redis', 'Docker'],
      accentTags: ['MCP', 'Claude API'],
      url: '#',
    },
    {
      num: '003',
      name: 'Realtime AI Chat Platform',
      desc: 'Enterprise chat platform with token streaming and zero layout shift. Uses Pretext.js for predictive bubble heights — zero reflows.',
      tags: ['Pretext.js', 'OpenAI Streaming', 'React', 'Serverless'],
      accentTags: ['Pretext.js', 'OpenAI Streaming'],
      url: '#',
    },
    {
      num: '004',
      name: 'Fine-tuned Domain Model',
      desc: 'Fine-tuned base LLM for a specific e-commerce domain. Synthetic data, simplified RLHF, and automated evaluation — ~40% gain vs base model.',
      tags: ['Fine-tuning', 'Python', 'FastAPI', 'AWS SageMaker'],
      accentTags: ['Fine-tuning'],
      url: '#',
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
  stack: { sectionNum: '01 —', title: 'Full stack' },
  projects: {
    sectionNum: '02 — Projects',
    sidebarTitleHtml:
      'Past<br /><span style="color:var(--accent);">year</span><br />in AI',
    sidebarLead: 'Real projects solving real problems with the strongest models available today.',
    sidebarCta: 'View on GitHub →',
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
};
