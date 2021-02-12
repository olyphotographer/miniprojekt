

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      colors: {
        maincolor: ''
      },
      fontFamily: {
        headline: ['Oswald'],
        normalo: ['Pacifico'],
        gloria: ['GloriaHallelujah']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}
