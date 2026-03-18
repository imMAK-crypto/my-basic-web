import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tm-bg': '#0a0608',
        'tm-primary': '#c8956c',
        'tm-accent': '#e8c9a0',
        'tm-blush': '#f5ddd5',
        'tm-text': '#f0ece6',
        'tm-muted': '#7a6b63',
        'tm-glass': 'rgba(200,149,108,0.08)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-ring': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(200, 149, 108, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(200, 149, 108, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(200, 149, 108, 0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        'xs': '4px',
      },
      spacing: {
        'safe-top': 'var(--safe-area-inset-top)',
        'safe-bottom': 'var(--safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
};

export default config;
