# SEO y Core Web Vitals — checklist

Este proyecto es **Astro static** (`output: 'static'`): el HTML principal se genera en build; los islands de React cargan bajo demanda (`client:visible` donde aplica).

## Lighthouse (lab)

Tras `npm run build`:

```bash
npm run preview
```

En otra terminal:

```bash
npx lighthouse http://localhost:4321 --only-categories=performance,accessibility,best-practices,seo --output html --output-path ./lighthouse-report.html
```

Revisa sobre todo **LCP**, **CLS** e **INP** (en lab, TBT sirve de proxy para trabajo en el hilo principal).

## Search Console (field / producción)

1. Verifica la propiedad del dominio (prefijo de URL o dominio).
2. Envía el **sitemap**: `https://TU_DOMINIO/sitemap-index.xml` (Astro + `@astrojs/sitemap`).
3. Comprueba **Core Web Vitals** y **Page indexing** tras el primer despliegue.
4. Mantén `public/robots.txt` alineado con tu URL real.

## Parche postinstall (`@astrojs/sitemap`)

Con **Astro 4.16** + **@astrojs/sitemap 3.7.x**, el hook `astro:routes:resolved` a veces no rellena `_routes` antes del build y el integrador falla. El script [`scripts/apply-sitemap-patch.mjs`](../scripts/apply-sitemap-patch.mjs) se ejecuta en `postinstall` y aplica el guard `(_routes ?? [])` en el paquete instalado.

## Ajustes ya alineados con SEO

- Metadatos y JSON-LD `Person` en [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro).
- **Multiidioma (ES / EN)**: rutas `/` y `/en/` con `hreflang` + canonical por idioma; copy en [`src/i18n/home.ts`](../src/i18n/home.ts).
- Hero con **h1 sr-only** (nombre + cargo en HTML); el nombre se pinta en canvas con `HeroHeadlinePretext` (`aria-hidden`) como **mosaico de microglifos** (DM Mono / estilo Matrix sobre silueta Syne; refuerzo tenue a línea completa), resalte circular y repel ligero al puntero.
- Con `prefers-reduced-motion`, `HeroHeadlinePretext` no mantiene animación continua tras el primer layout estable.

## `prefers-reduced-motion`

`HeroHeadlinePretext` no mantiene animación continua (resalte / sustituciones Matrix) si el usuario pide movimiento reducido.

## Última corrida de Lighthouse (lab, local)

Ejecutado contra `npm run preview` en `http://127.0.0.1:4321/` (build estático). Puntuaciones en escala 0–1:

| Categoría       | Score |
|-----------------|-------|
| Performance     | 0.92  |
| Accessibility   | 0.92  |
| Best practices  | 1.00  |
| SEO             | 1.00  |

Detalle completo: `lighthouse-report.json` en la raíz del repo (regenerar con el comando de arriba). **Search Console** solo aplica en producción con dominio verificado: envía el sitemap y revisa el informe de Core Web Vitals allí.
