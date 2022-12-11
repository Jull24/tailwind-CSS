/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : 'true',
      padding: '16 px',

    },

    extend: {
      colors: {
        yoo :'#FF8C32',
        gray: '#78716c',
      },
      screen: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
