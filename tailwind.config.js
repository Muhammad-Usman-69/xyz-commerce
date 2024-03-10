/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "product.html"
    // "side/*.html"
  ],
  theme: {
    extend: {
      maxHeight: {
        '31': '7.75rem',
      }
    },
  },
  plugins: [],
}

