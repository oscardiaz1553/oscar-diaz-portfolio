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
        accent: '#2D5BE3',
        'accent-deep': '#1C3FB8',
      },
    },
  },
  plugins: [],
};
