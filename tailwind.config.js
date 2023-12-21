/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#404653",
        secondary: "#EB5757E5",
        dark: "#000112E5",
      },
    },
  },
  plugins: [],
};

