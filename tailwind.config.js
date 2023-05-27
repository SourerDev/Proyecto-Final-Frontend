/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e63946',
        secundary: '#e63946',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')],
}
