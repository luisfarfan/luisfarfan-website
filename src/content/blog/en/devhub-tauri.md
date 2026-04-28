---
title: "myDevDock: Your Local Command Center built with Tauri v2"
description: "Tired of digging through endless folders? myDevDock is a high-performance desktop hub that centralizes your repositories, detects their stacks, and launches them in your favorite editor with a single click."
date: 2026-04-22
tags: ["Tauri v2", "Rust", "React 19", "Desktop", "Vite", "Tailwind CSS", "Raycast", "Bun"]
project: "DevHub Tauri"
lang: "en"
status: "ready"
progress: 100
repositories:
  - { name: "myDevDock", url: "https://github.com/luisfarfan/my-dev-dock" }
---

# myDevDock: The Ultimate Desktop Hub for Developers

As developers, we spend a large part of our day jumping between terminals, editors, and project folders. **myDevDock** was born to simplify that flow, providing a smooth, fast, and private desktop interface to manage all your local repositories.

## 1. Native Performance and Hybrid Architecture

The choice of **Tauri v2** and **Rust** was not just for performance, but for the ability to create an "offline-first" application with direct file system access without compromising security.

*   **Smart Workspace Scanning:** The Rust engine implements advanced monorepo detection logic. it automatically recognizes roots for **Nx, Turborepo, pnpm workspaces, Bazel, and Go work**, stopping recursive scanning once a project root is found. This avoids sub-package duplication and guarantees instant loading of thousands of repositories.
*   **Cross-window Synchronization:** Using native Tauri events, myDevDock instantly synchronizes visual themes and settings across different windows (e.g., Dashboard and Settings), providing a coherent OS-level experience.

## 2. Automation with Groups and Raycast

myDevDock doesn't just organize; **it executes**.

### Cascading Launch
It allows you to create project groups (e.g., "Payments Microservices") and launch them all in your favorite editor with a single click. The system includes a **configurable launch delay** to avoid overloading the CPU when opening multiple heavy editor instances simultaneously.

### Raycast Launcher Export
For Raycast users, the hub can **export shell scripts (.sh)** directly to your Script Commands folder. These scripts include icon presets and keywords, allowing you to open complex groups directly from the Raycast search bar without even touching the mouse.

## 3. High-Level Developer Experience (DX)

The project was designed with ease of development and maintenance in mind:

*   **Integrated Mocking System:** Thanks to a decoupled services layer, the project allows for browser-based development (`bun run dev`) using automatic **Mocks** when Tauri APIs are missing.
*   **Stack and Editor Heuristics:** The system doesn't just detect the language (Python, Rust, JS); it suggests the "Probable Editor" by analyzing hidden folders like `.cursor` or `.vscode`, customizing shortcuts for each repo.

## 4. Neon-Glass Aesthetic and Local Privacy

The interface follows a **Liquid Glass** aesthetic with blur and neon effects, but the most important thing is what you don't see: **your data**. myDevDock is a purely local application; your file paths and settings never leave your machine.

## Conclusion

myDevDock is the result of applying systems engineering to daily productivity. By combining the power of Rust with the flexibility of React 19 and integration with system tools like Raycast, it becomes the ideal command center for any developer who values their time and privacy.
