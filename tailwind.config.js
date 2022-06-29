/** @type {import('tailwindcss').Config} **/

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1920px",
      },
      fontFamily: {
        sans: ["Mabry", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "cn-blue": "#402EC1",
        "cn-orange": "#FFA700",
      },
    },
  },
  plugins: [],
};
