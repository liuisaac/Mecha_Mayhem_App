/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        recursive: ["Recursive", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        "atkinson-hyperlegible": ["Atkinson Hyperlegible", "sans-serif"],
        "courier-prime": ["Courier Prime", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"]

      },
    },
    screens: {
      se: "300px",
      xxs: "366px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
