// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,php}",   // alle HTML/JS/PHP in /src
    "./**/*.{html,js,php}"        // falls du außerhalb arbeitest
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}