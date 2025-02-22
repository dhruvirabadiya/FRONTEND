/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "768px",
          md: "896px",
          lg: "960px",
          xl: "1065px",
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
};
