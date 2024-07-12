/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#051726",
        secondary: "#4C3BCF",
      },
      boxShadow: {
        "3xl": "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      },
      fontFamily: {
        firaX: ["Fira Sans Extra Condensed", "sans-serif"],
        chango: ["Chango", "cursive"],
      },
    },
  },
  plugins: [],
};
