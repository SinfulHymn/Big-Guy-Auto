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
        'primary-dark-grey': '#36404B',
        'secondary-dark-grey': '#2C343D',
        'primary-bright-red': '#FB4848',
        'accent-hover': '#FF00A0',
        'accent-focus': '#FF00C0',
        'accent-active': '#FF00E0',
        'accent-disabled': '#FF00FF',
        'carousel-title1': 'rgba(54,64,75,0.85)',
      },
      fontFamily:{
        'body': ['"Open Sans"', 'sans-serif'],
      },
    },
    fluidTypography: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-fluid-typography"),
  ],
}
