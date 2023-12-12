/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-600": "#000078",
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
