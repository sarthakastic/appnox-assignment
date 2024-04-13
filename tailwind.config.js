/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slideIn 0.5s ease-in-out",
      },

      // that is actual animation
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
