/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#F6F6F6",
        stone: "#A7A6A6",
        powder: "#D6D6D6",
      },
      animation: {
        slide: "slideIn 0.5s ease-in-out",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        dmserif: ["DMSerif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
