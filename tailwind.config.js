/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "harry-font": ["harry-font", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
  },
  plugins: [],
};
