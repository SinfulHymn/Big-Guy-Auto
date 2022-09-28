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
        'primary': '#36404b',
        'secondary': '#2E2E2E',
        'accent': '#FF0080',
        'accent-hover': '#FF00A0',
        'accent-focus': '#FF00C0',
        'accent-active': '#FF00E0',
        'accent-disabled': '#FF00FF',
      },
      fontFamily:{
        'body': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
