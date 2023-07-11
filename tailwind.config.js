/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#176072',
        secondary: '#d5dff6',
        'bg-main': '#ffffff',
        text: '#040201',
        accent: '#060d1e',
        'bg-two': '#f7f7f7',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
