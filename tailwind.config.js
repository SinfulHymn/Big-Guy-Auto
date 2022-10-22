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
        'main': '#0e1e2D',
        'main-dark': '#0c1825',
        'main-red': '#CE2D4F',
        'main-background': '#EEF0EB',
        'main-header': '#F5F5F5',
        'primary-dark-grey': '#36404B',
        'secondary-dark-grey': '#2C343D',
        'primary-bright-red': '#FB4848',
        'accent-hover': '#FF00A0',
        'accent-focus': '#FF00C0',
        'accent-active': '#FF00E0',
        'accent-disabled': '#FF00FF',
        'carousel-title1': 'rgba(14, 30, 45, .75)',
        'main-green': '#344E41',
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
