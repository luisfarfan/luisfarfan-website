# 🚀 Portfolio — Senior Full Stack Developer & AI Engineer

Website personal de alto impacto construido con **Astro 4**, **React**, **Pretext.js** y **Tailwind CSS**.

## Stack

| Tecnología | Rol |
|---|---|
| [Astro 4](https://astro.build) | SSG → HTML estático = SEO perfecto |
| [i18n nativo](https://docs.astro.build/en/guides/internationalization/) | `/` (ES) y `/en/` sin dependencias extra |
| [React 18](https://react.dev) | Islands interactivos (canvas, terminal) |
| [@chenglou/pretext](https://github.com/chenglou/pretext) | Text layout sin DOM reflows |
| [Tailwind CSS 3](https://tailwindcss.com) | Utilidades de estilos |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap automático |

## Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Dev server
npm run dev

# 3. Build producción
npm run build

# 4. Preview del build
npm run preview
```

## Personalización — checklist

### 1. Tu info personal
Edita los objetos `ME` (y el resto del copy) en **`src/i18n/home.ts`** — hay versiones **`homeEs`** y **`homeEn`**. Mantén datos de contacto y enlaces coherentes entre idiomas.

Antes también estaba en `index.astro`; ahora la home usa [`src/components/pages/HomePage.astro`](src/components/pages/HomePage.astro).

```js
const ME = {
  name: 'Tu Nombre Real',
  email: 'hola@tudominio.com',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  twitter: 'https://twitter.com/tuusuario',
  cvUrl: '/cv.pdf',        // pon tu CV en /public/cv.pdf
  bio: `Tu bio aquí...`,
};
```

### 2. Tu dominio
- `astro.config.mjs` → cambia `site: 'https://tudominio.com'`
- `src/config/site.ts` → **misma URL** en `SITE.url` (canonical, OG, `hreflang`)
- `public/robots.txt` → cambia la URL del sitemap

### 3. Tus proyectos
Edita `PROJECTS` en **`src/i18n/home.ts`** (en `homeEs` y, si aplica, `homeEn`). Cada proyecto tiene:
- `num`: número (001, 002…)
- `name`: nombre del proyecto
- `desc`: descripción corta
- `tags`: tecnologías usadas
- `accentTags`: cuáles se resaltan en verde
- `url`: link al proyecto o repositorio

### 4. Tu stack
Edita `STACK` en **`src/i18n/home.ts`** (por idioma si quieres títulos distintos).

### 5. OG Image (importante para redes)
Crea una imagen `1200 × 630px` y guárdala en `public/og-image.jpg`.

### 6. Tu CV
Guarda tu CV como `public/cv.pdf`.

## Deploy en Vercel (recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

O conecta tu repositorio de GitHub a [vercel.com](https://vercel.com) y se deploya automáticamente en cada push.

## Estructura del proyecto

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg     ← crea esta imagen (1200x630)
│   ├── cv.pdf           ← tu CV
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── home/              — Secciones de la landing (hero, stack, etc.)
│   │   ├── pages/
│   │   │   └── HomePage.astro — Orquesta layout + secciones
│   │   ├── Nav.astro          — Navbar + idioma
│   │   ├── PretextHero.tsx    — Canvas con @chenglou/pretext
│   │   └── Terminal.tsx       — Terminal animada
│   ├── layouts/
│   │   └── BaseLayout.astro   — SEO completo + Schema.org
│   ├── pages/
│   │   ├── index.astro        — Home ES (`/`)
│   │   └── en/index.astro     — Home EN (`/en/`)
│   ├── i18n/
│   │   └── home.ts            — Textos ES / EN
│   └── styles/
│       └── global.css         — Tipografías + animaciones
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Features de SEO incluidas

- ✅ HTML estático (0 JS al primer render)
- ✅ Meta title + description optimizados
- ✅ Open Graph completo (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org `Person` structured data
- ✅ Canonical URL
- ✅ Sitemap XML automático
- ✅ robots.txt
- ✅ Favicon SVG
- ✅ `lang="es"` correcto
- ✅ Alt texts en imágenes y canvas

## Pretext.js — cómo se usa

El componente `PretextHero.tsx` usa `@chenglou/pretext` para medir texto
y calcular line-breaks **sin tocar el DOM**. Esto permite que el texto fluya
alrededor de la esfera animada a 60fps sin ningún reflow.

```ts
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';

// Una vez por bloque de texto + fuente (canvas measureText + caché)
const prepared = prepareWithSegments('CREATIVE  INNOVATIVE  …', '500 13px "DM Mono", monospace');

// Por cada franja de ancho (p. ej. columnas alrededor de un obstáculo)
const line = layoutNextLine(prepared, { segmentIndex: 0, graphemeIndex: 0 }, maxWidth);
// line.text, line.width, line.end → siguiente cursor
```
