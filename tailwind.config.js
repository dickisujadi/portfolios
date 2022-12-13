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
        "eaciit": "#F59828",
        "kano": "#5DA6E2",
      },
      backgroundColor: {
        "grey-200": "var(--grey-200)",
      },
    }
  },
  plugins: [],
}
