import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Text", "Arial", "sans-serif"],
        livvic: ["Livvic", "Arial", "sans-serif"],
        cinzel: ["Cinzel", "Arial", "sans-serif"],
        oswald: ["Oswald", "Arial", "sans-serif"],
        raleway: ["Raleway", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
