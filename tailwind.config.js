/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        stroke: 'rgb(var(--stroke) / <alpha-value>)',
        brand: {
          blue: '#0A84FF',
          purple: '#BF5AF2',
        },
        system: {
          green: '#30D158',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(5, 5, 7, 0.08)',
      },
      borderRadius: {
        apple: '2rem',
      },
      textWrap: {
        balance: 'balance',
      },
    },
  },
  plugins: [],
};
