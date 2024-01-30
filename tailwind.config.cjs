/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : '#354049',
        icon: "#aeb3b6",
        body : "#eceff3"
      },
      fontFamily : {
        Montserrat : ["Montserrat"]
      }
    },
  },
  plugins: [],
}
