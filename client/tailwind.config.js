/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#4B5563",
        secondary: "#3B82F6",
        c: "#393E46",
        back_bg: "#138496",
      },
      fontSize: {
        primaryFont: "0.75rem",
        secondaryFont: "2rem",
      },
      colors: {
        brandPrimary: "#ffffff",
        brandSecondary: "#000000",
        brandTertiary: "#3B82F6",
      },
    },
  },
  plugins: [],
};
