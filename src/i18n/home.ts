/**
 * Copy for the one-page portfolio. Astro i18n serves `/` (es) and `/en/`.
 */
export type StackColumn = {
  title: string;
  color: 'accent' | 'highlight';
  items: string[];
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
    langSwitch: string;
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
  };
  stack: { sectionNum: string; title: string };
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
    title: 'Tu Nombre — Senior Full Stack Developer & AI Engineer',
    description:
      'Senior Full Stack Developer con 12 años de experiencia en Backend, Frontend, DevOps y Serverless. Especializado en IA: RAG, Agents, LLMs, embeddings y pipelines inteligentes.',
    keywords:
      'full stack developer, senior developer, devops, backend, frontend, serverless, inteligencia artificial, AI engineer, RAG, LLM, Peru, Lima',
  },
  personJobTitle: 'Senior Full Stack Developer',
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
    langSwitch: 'EN',
  },
  srOnly: {
    heroCanvas:
      'Animación decorativa de palabras clave en canvas. El título principal y la descripción del perfil están en la columna izquierda.',
  },
  ME: {
    name: 'Tu Nombre',
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
      items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'WebGL / Canvas'],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: ['Node.js / Bun', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
    },
    {
      title: 'DevOps',
      color: 'accent',
      items: ['Docker / K8s', 'Terraform', 'GitHub Actions', 'Prometheus', 'Datadog'],
    },
    {
      title: 'Serverless',
      color: 'accent',
      items: ['AWS Lambda', 'Vercel Edge', 'Cloudflare Workers', 'SQS / SNS', 'Step Functions'],
    },
    {
      title: 'IA — especialidad',
      color: 'highlight',
      items: ['OpenAI / Claude API', 'LangChain / LlamaIndex', 'RAG · Embeddings', 'Fine-tuning', 'MCP · Agents'],
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
    subtitle: `Arquitecto de software con dominio end-to-end.<br>
Backend · Frontend · DevOps · Serverless · <strong style="color:var(--ink);">IA</strong>.<br>
Últimamente construyendo el futuro con LLMs y agentes.`,
    ctaProjects: 'Ver proyectos ↓',
    ctaCv: 'Descargar CV',
    statsYears: 'Años exp.',
    statsProjects: 'Proyectos',
    statsAi: 'Proyectos IA',
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
    title: 'Your Name — Senior Full Stack Developer & AI Engineer',
    description:
      'Senior full stack engineer with 12 years across backend, frontend, DevOps, and serverless. AI focus: RAG, agents, LLMs, embeddings, and production-grade ML pipelines.',
    keywords:
      'full stack developer, senior engineer, devops, backend, frontend, serverless, artificial intelligence, AI engineer, RAG, LLM, Peru, Lima',
  },
  personJobTitle: 'Senior Full Stack Developer',
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
    langSwitch: 'ES',
  },
  srOnly: {
    heroCanvas:
      'Decorative keyword animation on canvas. The main heading and profile description are in the left column.',
  },
  ME: {
    name: 'Your Name',
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
      items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'WebGL / Canvas'],
    },
    {
      title: 'Backend',
      color: 'accent',
      items: ['Node.js / Bun', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
    },
    {
      title: 'DevOps',
      color: 'accent',
      items: ['Docker / K8s', 'Terraform', 'GitHub Actions', 'Prometheus', 'Datadog'],
    },
    {
      title: 'Serverless',
      color: 'accent',
      items: ['AWS Lambda', 'Vercel Edge', 'Cloudflare Workers', 'SQS / SNS', 'Step Functions'],
    },
    {
      title: 'AI — focus',
      color: 'highlight',
      items: ['OpenAI / Claude API', 'LangChain / LlamaIndex', 'RAG · Embeddings', 'Fine-tuning', 'MCP · Agents'],
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
    subtitle: `Software architect with end-to-end ownership.<br>
Backend · Frontend · DevOps · Serverless · <strong style="color:var(--ink);">AI</strong>.<br>
Recently building the future with LLMs and agents.`,
    ctaProjects: 'View projects ↓',
    ctaCv: 'Download CV',
    statsYears: 'Years exp.',
    statsProjects: 'Projects',
    statsAi: 'AI projects',
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
