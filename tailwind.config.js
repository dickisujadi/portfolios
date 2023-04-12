/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "grey-100": "#F9F9F9",
      },
      margin: {
        "3vw": "3vw",
        "3vh": "3vh",
        "5vw": "5vw",
        "5vh": "5vh",
        "10vw": "10vw",
        "10vh": "10vh",
        "15vw": "15vw",
        "15vh": "15vh",
        "20vw": "20vw",
        "20vh": "20vh",
      },
      padding: {
        "5vw": "5vw",
        "5vh": "5vh",
        "10vw": "10vw",
        "10vh": "10vh",
        "15vw": "15vw",
        "15vh": "15vh",
      },
      colors: {
        "primary-blue": "#013A4E",
        "primary-peach": "#CD6F63",
        "grey-100": "#B9B9B9"
      },
      textColor: {
        "grey-300": "#D9D9D9",
        "grey-500": "#B9B9B9",
        "grey-700": "#9F9F9F",
        "grey-900": "#696969",
        // "black-100": "var(--black-100)",
        // "grey-100": "var(--grey-100)",
        // "grey-200": "var(--grey-200)",
        // "grey-500": "var(--grey-500)",
        // "eaciit": "#F59828",
        // "kano": "#5DA6E2",
        // "mitrais": "#A351F1",
        // "im2": "#3B89E9",
        // "primary-grey": "#565656"
      },
      backgroundColor: {
        "grey-200": "var(--grey-200)",
      },
    },
    screens: {
      sm: { max: '480px' }
    },
  },
  plugins: [],
}
