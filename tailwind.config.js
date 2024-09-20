/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      boxShadow: {
        inner: "3px 3px 6px #654321, -3px -3px 6px #ffffff",
      },
      colors: {
        darkGold: "#B8860B", // Dark Gold
        darkBrown: "#654321",
        skele: "#E0E0E0",
      },
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
      keyframes: {
        popUp: {
          to: { opacity: "1" },
        },
      },
      animation: {
        popUp: "popUp 0.5s cubic-bezier(0.8, 0, 1, 1) forwards",
      },
    },
  },
  plugins: [],
};
