/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121213",
        secondary: "#ddd",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
