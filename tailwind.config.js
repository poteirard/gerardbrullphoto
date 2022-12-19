const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "prismic-purple": "#5163ba",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
