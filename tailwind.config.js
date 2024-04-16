/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#D84727",
        secondary: "#01522D",
        bgsPlaceholder: "#F1DDC9",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
