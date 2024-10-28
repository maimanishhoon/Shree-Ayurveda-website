/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height:{
        100 : '471px',
      },
      fontFamily: {
        body : 'roboto',
        style : 'Arima',
      },
      animation: {
        'draw': 'draw 2s ease-in-out forwards',
      },
      keyframes: {
        draw: {
          '0%': { 'stroke-dasharray': '1000', 'stroke-dashoffset': '1000' },
          '100%': { 'stroke-dasharray': '1000', 'stroke-dashoffset': '0' },
        },
    },
  },
}
}

