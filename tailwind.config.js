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
        "mitrais": "#A351F1",
        "im2": "#3B89E9",
        "primary-grey": "#565656"
      },
      backgroundColor: {
        "grey-200": "var(--grey-200)",
      },
    },
    screens: {
      'xs' : {'max': '414px'},

      'sm': {'min': '415px', 'max': '1279px'},
      // => @media (max-width: 1023px) { ... }
  
      'lg': {'min': '1280px'},
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}
