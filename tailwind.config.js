/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        uoc: "#000078",
        primary: "#be9bff",
        secondary: "#4c177a",
      },
      fontFamily: {
        text: "Montserrat Variable, sans-serif",
        title: "Outfit Variable, sans-serif",
      },
    },
  },
  plugins: [],
};
