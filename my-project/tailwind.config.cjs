/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#E5D1FF',
        'purple-half-light': '#C293FF',
        'purple-regular': '#C293FF',
        'purple-half-dark': '#7F39D9',
        'purple-dark': '#361165',
        'purple-fulldark': '#220629'
      },
    },
  },
  plugins: [],


}
