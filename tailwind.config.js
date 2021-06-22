module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        DEFAULT: '#595959',
        dark: '#282828',
        light: '#f2f2f2',
      },
      blue: {
        DEFAULT: '#001689',
        light: '#3a5fbf',
      },
      beige: '#ffeecf',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      display: ['Oswald', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
