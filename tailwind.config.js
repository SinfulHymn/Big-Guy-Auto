/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'main': '#072F4F',
        'main-dark': '#07263F',
        'main-red': '#CE2D4F',
        'main-background': '#FFFFFF',
        'main-header': '#FFFFFF',
        'main-text': '#444444',
        'primary-dark-grey': '#36404B',
        'secondary-dark-grey': '#2C343D',
        'primary-bright-red': '#FB4848',
        'carousel-title1': 'rgba(7, 47, 79, .75)',
        'carousel-title2': 'rgba(255, 255, 255, .75)',
      },
      fontFamily:{
        'sans': [ '"Noto Sans"', 'sans-serif' ],
      },
    },
    fluidTypography: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-fluid-typography"),
  ],
}
