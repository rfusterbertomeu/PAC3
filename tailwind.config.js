/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        uoc: "#000078",
        primary: {
          transparent: "#f8f5ff",
          light: "#f2ebff",
          DEFAULT: "#be9bff",
        },
        secondary: "#4c177a",
      },
      fontFamily: {
        text: "Montserrat Variable, sans-serif",
        title: "Outfit Variable, sans-serif",
      },
      fontSize: {
        xxs: ["0.7rem", "1rem"],
      },
    },
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: "1024px",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
