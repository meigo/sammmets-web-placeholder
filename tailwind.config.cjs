const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config}*/
/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      fontFamily: {
        title: "BarlowCondensed",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "3vw": ["3vw", { lineHeight: "3vw" }],
        "4vw": ["4vw", { lineHeight: "4vw" }],
        "5vw": ["5vw", { lineHeight: "5vw" }],
        "6vw": ["6vw", { lineHeight: "7vw" }],
        "8vw": ["8vw", { lineHeight: "9vw" }],
        "9vw": ["9vw", { lineHeight: "10vw" }],
        "10vw": ["10vw", { lineHeight: " 1" }],
        "11vw": ["11vw", { lineHeight: " 1" }],
        "12vw": ["12vw", { lineHeight: " 1" }],
        "13vw": ["13vw", { lineHeight: " 1" }],
        "14vw": ["14vw", { lineHeight: " 1" }],
        "15vw": ["15vw", { lineHeight: " 1" }],
        "16vw": ["16vw", { lineHeight: " 1" }],
        "18vw": ["18vw", { lineHeight: " 1" }],
        "20vw": ["20vw", { lineHeight: " 1" }],
      },
      colors: {
        "sm-cream": "#E2DACB",
        "sm-green": "#024E27",
      },
    },
  },

  plugins: [],
};

module.exports = config;
