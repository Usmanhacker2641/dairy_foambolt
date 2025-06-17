/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B263B',
          50: '#E6EBEF',
          100: '#CDD5DF',
          200: '#9AA6BF',
          300: '#68789F',
          400: '#435374',
          500: '#1B263B',
          600: '#141C2C',
          700: '#0D131D',
          800: '#07090E',
          900: '#010204',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};