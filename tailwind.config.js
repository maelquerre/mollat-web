module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: '#595959',
      darkGray: '#282828',
      lightGray: '#f2f2f2',
      blue: '#001689',
      lightBlue: '#3a5fbf',
      beige: '#ffeecf',
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
