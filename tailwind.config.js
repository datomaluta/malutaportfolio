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
    },
  },
  plugins: [],
};
