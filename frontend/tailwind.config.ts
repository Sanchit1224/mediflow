import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#07111f',
        panel: '#0b1829',
        line: 'rgba(148, 163, 184, 0.14)',
        brand: { 400: '#52b8ff', 500: '#2589f4', 600: '#1771dc' },
      },
      boxShadow: { glow: '0 0 42px rgba(37, 137, 244, 0.16)' },
      borderRadius: { xl: '0.875rem', '2xl': '1.25rem' },
    },
  },
  plugins: [],
} satisfies Config;
