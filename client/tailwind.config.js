/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#e63946',
      }},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
