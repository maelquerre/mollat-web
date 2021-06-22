module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkGray: '#282828',
      gray: '#f2f2f2',
      blue: '#001689',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      display: ['Oswald', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
