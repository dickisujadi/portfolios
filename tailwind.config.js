/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        "black-100": "var(--black-100)",
        "grey-100": "var(--grey-100)",
        "grey-200": "var(--grey-200)",
        "grey-500": "var(--grey-500)",
      },
      backgroundColor: {
        "grey-200": "var(--grey-200)",
      }
    }
  },
  plugins: [],
}
