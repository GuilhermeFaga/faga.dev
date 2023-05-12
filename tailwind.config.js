/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
      body: ["Mulish"]
    },
    extend: {
      blur: {
        xs: '0.5px',
      },
      colors: {
        red: "#fb1414"
      }
    },
  },
  plugins: [],
  important: true,
}