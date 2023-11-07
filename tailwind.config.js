/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "common-padding-x": "12px",
        "common-padding-y": "8px",
      },
      colors: {
        "common-bg": "#EFEFEF",
      },
    },
  },
  plugins: [],
};
