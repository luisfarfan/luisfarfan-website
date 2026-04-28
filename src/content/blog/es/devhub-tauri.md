---
title: "myDevDock: Tu Centro de Mando Local construido con Tauri v2"
description: "Cansado de navegar por carpetas infinitas? myDevDock es un hub de escritorio de alto rendimiento que centraliza tus repositorios, detecta sus stacks y los lanza en tu editor favorito con un solo clic."
date: 2026-04-22
tags: ["Tauri v2", "Rust", "React 19", "Desktop", "Vite", "Tailwind CSS", "Raycast", "Bun"]
project: "DevHub Tauri"
lang: "es"
status: "ready"
progress: 100
repositories:
  - { name: "myDevDock", url: "https://github.com/luisfarfan/my-dev-dock" }
---

# myDevDock: El Dock Definitivo para Desarrolladores

Como desarrolladores, pasamos gran parte del día saltando entre terminales, editores y carpetas de proyectos. **myDevDock** nace para simplificar ese flujo, proporcionando una interfaz de escritorio fluida, rápida y privada para gestionar todos tus repositorios locales.

## 1. Rendimiento Nativo y Arquitectura Híbrida

La elección de **Tauri v2** y **Rust** no fue solo por el rendimiento, sino por la capacidad de crear una aplicación "offline-first" con acceso directo al sistema de archivos sin comprometer la seguridad.

*   **Escaneo Inteligente de Workspaces:** El motor en Rust implementa una lógica avanzada de detección de monorepos. Reconoce automáticamente raíces de **Nx, Turborepo, pnpm workspaces, Bazel y Go work**, deteniendo el escaneo recursivo una vez que encuentra la raíz del proyecto. Esto evita la duplicidad de sub-paquetes y garantiza una carga instantánea de miles de repositorios.
*   **Sincronización Multi-ventana:** Utilizando eventos nativos de Tauri, myDevDock sincroniza instantáneamente el tema visual y las configuraciones entre diferentes ventanas (ej. Dashboard y Ajustes), ofreciendo una experiencia de sistema operativo coherente.

## 2. Automatización con Grupos y Raycast

myDevDock no solo organiza; **ejecuta**.

### Lanzamiento en Cascada
Permite crear grupos de proyectos (ej. "Microservicios de Pagos") y lanzarlos todos en tu editor favorito con un solo clic. El sistema incluye un **retraso de lanzamiento configurable** para evitar colapsar la CPU al abrir múltiples instancias de editores pesados simultáneamente.

### Exportación de Launchers para Raycast
Para los usuarios de Raycast, el hub puede **exportar scripts de shell (.sh)** directamente a tu carpeta de Script Commands. Estos scripts incluyen presets de iconos y palabras clave, permitiéndote abrir grupos complejos directamente desde el buscador de Raycast sin siquiera tocar el mouse.

## 3. Developer Experience (DX) de Alto Nivel

El proyecto fue diseñado pensando en la facilidad de desarrollo y mantenimiento:

*   **Sistema de Mocks Integrado:** Gracias a una capa de servicios desacoplada, el proyecto permite el desarrollo en el navegador (`bun run dev`) utilizando **Mocks** automáticos cuando las APIs de Tauri no están presentes.
*   **Heurística de Stacks y Editores:** El sistema no solo detecta el lenguaje (Python, Rust, JS), sino que sugiere el "Probable Editor" analizando carpetas ocultas como `.cursor` o `.vscode`, personalizando los accesos rápidos para cada repo.

## 4. Estética Neon-Glass y Privacidad Local

La interfaz sigue una estética **Liquid Glass** con efectos de desenfoque y neón, pero lo más importante es lo que no ves: **tus datos**. myDevDock es una aplicación puramente local; tus rutas de archivos y configuraciones nunca salen de tu máquina.

## Conclusión

myDevDock es el resultado de aplicar ingeniería de sistemas a la productividad diaria. Al combinar la velocidad de Rust con la flexibilidad de React 19 y la integración con herramientas del sistema como Raycast, se convierte en el centro de mando ideal para cualquier desarrollador que valore su tiempo y su privacidad.
