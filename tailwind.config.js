// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{html,js}",         // alle HTML und JS im root
    "./src/**/*.{html,js}",  // alle Dateien in /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}