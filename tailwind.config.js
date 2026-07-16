/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque Variable', 'sans-serif'],
        sans: ['Instrument Sans', 'sans-serif'],
        kanit: ['Bricolage Grotesque Variable', 'sans-serif'],
      },
      colors: {
        // Out. palette
        klein: '#1B2FCC',
        'klein-deep': '#141E5C',
        'klein-mid': '#4A55C4',
        'klein-soft': '#C8CDF0',
        carne: '#F2C6B4',
        'carne-deep': '#BC6039',
        'carne-tinta': '#9C3F1C',
        paper: '#F3EDE7',
        'paper-pure': '#FBF8F5',
        'ink-2': '#3C4375',
        muted: '#585D88',
        // Back-compat aliases (existing class names → new palette)
        bg: '#F3EDE7',
        surface: '#FBF8F5',
        ink: '#141E5C',
        accent: '#1B2FCC',
        'accent-deep': '#141E5C',
      },
    },
  },
  plugins: [],
};
