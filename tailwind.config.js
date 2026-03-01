/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  

  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
        primary: '#1F2F5A',
        secondary: '#F47C20',
        accent: '#AFCBE3',
        darkBg: '#0F172A',
        darkSurface: '#1E293B'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}