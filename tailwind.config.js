/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
  },
    extend: {
      colors:{
        dark: '#101130',
        slate: '#606176',
        primary: '#3BB77E',
      }
    },
  },
  plugins: [],
}
