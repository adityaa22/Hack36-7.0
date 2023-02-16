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
      animation: {
        "horizontal-showcase": "horizontal-showcase linear infinite 25s",
      },
      keyframes: {
        "horizontal-showcase": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-980px)",
          },
        },
      },
    },
  },
  plugins: [],
};
