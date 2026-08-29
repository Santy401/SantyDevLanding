/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f0d',
        surface: '#101612',
        'surface-light': '#1a2420',
        text: '#e6f5e6',
        'text-muted': '#7a9a7a',
        accent: '#00ff9c',
        'accent-dim': '#00cc7a',
        link: '#00b3ff',
        error: '#ff5c5c',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
