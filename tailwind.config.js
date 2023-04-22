/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { max: "1280px" },
        lg: { max: "1023px" },
        sm: { max: "639px" },
      },
      animation: {
        smoothLoad: "smooth 0.8s ease-out forwards",
      },
      keyframes: {
        smooth: {
          from: { opacity: "0", transform: "translateY(-50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
