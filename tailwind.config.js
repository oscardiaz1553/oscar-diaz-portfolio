/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        bg: '#F4F3EE',
        surface: '#FFFFFF',
        ink: '#0E0E0C',
        accent: '#14A05A',
        'accent-deep': '#0B7C46',
        accent2: '#2D5BE3',
        'accent2-deep': '#1C3FB8',
      },
    },
  },
  plugins: [],
};
