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
      }
    },
  },
  plugins: [],
  important: true,
}