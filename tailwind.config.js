/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffcc00",
        "secondary": "#c940af"
      },
      fontFamily: {
        "cabin": ['cabin', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-unimportant')],
}