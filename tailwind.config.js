/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bgColour': '#1a151e',
        'primaryColour': '#a57ec6',
        'secondryColour': '#767279'
      },
      fontFamily: {
        'sfpro': ['SF Pro Display','sans-serif'],
        'sfprotext':['SF Pro Text','sans-serif'],
        'poppins': ['Poppins','sans-serif']
      },
    },
  },
  plugins: [],
}

