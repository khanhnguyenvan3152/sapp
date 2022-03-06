const colors = require('tailwindcss/colors')
module.exports = {
  mode:"jit",
  content: [
    "./public/css/*.css",
    "./public/scripts/*.js",
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  color:{
    bglight: "#fff",
    bggray: "#F0F2F5",
    bgheavy: "#C4C4C4"
  },
  
  plugins: [],
}
