# Luis Farfan — Engineering Portfolio & Technical Blog

Bienvenido a mi espacio personal de ingeniería. Este repositorio contiene mi sitio web personal, diseñado para mostrar mi trabajo en **Arquitectura de Software**, **Desarrollo Full-stack** y **Sistemas de Inteligencia Artificial**.

Este proyecto no es solo un portfolio, sino una pieza de ingeniería en sí misma, optimizada para el rendimiento, el SEO y una experiencia de usuario técnica impecable.

## 🛠️ Stack Tecnológico

He seleccionado cada herramienta para maximizar la velocidad y la flexibilidad:

*   **[Astro 4](https://astro.build)**: El motor principal. Generación de sitios estáticos (SSG) que garantiza una carga instantánea y un SEO perfecto.
*   **[React 18](https://react.dev)**: Utilizado estratégicamente para "islas" interactivas de alto rendimiento (canvas del Hero, consolas técnicas, terminales).
*   **[Pretext.js](https://github.com/chenglou/pretext)**: Una librería avanzada de **Cheng Lou** para el diseño de texto de alto rendimiento sin reflows del DOM. Se utiliza en los componentes creativos para garantizar una tipografía fluida y eficiente.
*   **[Tailwind CSS](https://tailwindcss.com)**: Sistema de diseño atómico para mantener una estética consistente y minimalista.
*   **[Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)**: Para lograr una experiencia de Single Page Application (SPA) sin la sobrecarga de un framework pesado.

## ✨ Características Técnicas

*   **Mosaic Hero Canvas**: El nombre en la cabecera se dibuja dinámicamente mediante un mosaico de micro-glifos estilo Matrix, combinando tipografía `Syne` y `DM Mono` con efectos de glitch y repelencia al cursor.
*   **Arquitectura i18n Nativa**: Soporte completo para español e inglés implementado de forma nativa en Astro, sin dependencias externas pesadas.
*   **Engineering Chronicles**: Un blog técnico integrado que utiliza Markdown y **Mermaid.js** para diagramas de arquitectura, permitiendo una documentación profunda de casos de estudio.
*   **SEO & Accesibilidad**: Optimización completa de metadatos Open Graph, Schema.org (Person), Sitemap automático y cumplimiento de estándares de accesibilidad.

## 🏗️ Estructura del Proyecto

*   `src/components/home/`: Secciones principales de la landing (Hero, Stack, Proyectos).
*   `src/components/pages/`: Lógica de plantillas para la Home y el Blog.
*   `src/content/blog/`: Artículos técnicos en Markdown (ES/EN).
*   `src/i18n/`: Diccionarios de internacionalización y configuración de contenidos.
*   `src/layouts/`: Estructura base con SEO inyectado.

## 🚀 Guía de Inicio

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Generar build de producción
npm run build
```

---

*Este sitio es un reflejo de mi compromiso con la calidad técnica y la innovación constante. Siéntete libre de explorar el código.*
