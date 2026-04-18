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
        ink: '#0a0a0a',
        paper: '#f5f3ef',
        accent: '#00c896',
        accent2: '#ff4d2e',
        muted: '#888888',
      },
    },
  },
  plugins: [],
};
