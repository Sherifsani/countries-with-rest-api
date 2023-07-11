/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        DBDME: "hsl(209, 23%, 22%)",
        VeryDarkBlueDarkBg: "hsl(207, 26%, 17%)",
        VeryDarkBlueLightText: "hsl(200, 15%, 8%)",
        DarkGrayLightInput: "hsl(0, 0%, 52%)",
        VeryLightGrayLightBg: "hsl(0, 0%, 98%)",
        WhiteDarkModeTextLightModeElements: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
