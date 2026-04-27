/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        muted: 'var(--muted)',
      },
    },
  },
  plugins: [],
};
