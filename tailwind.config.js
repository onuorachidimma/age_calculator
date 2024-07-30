/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#377AE1', 
        grey: '#EEEEEE', 
        deepBlue: '#202474', 
        deepGrey: '#C4C4C2', 
        lightBlue: '#5A88BA', 
        deeperBlue: '#1B56D5', 
      },
    },
  },
  plugins: [],
}

