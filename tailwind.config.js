const plugin = require('tailwindcss/plugin')

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
    container: {
      center: true,
      padding: '1rem',
      sizes: {
        sm: '620px',
        md: '750px',
        lg: '1000px',
        '2xl': '1500px',
      },
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
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addComponents, config }) {
      const containersSizes = {}

      Object.entries(config('theme.container.sizes')).forEach(([breakpoint, size]) => (
        containersSizes[`@screen ${breakpoint}`] = {
          maxWidth: size,
        }
      ))

      addComponents({
        '.container': {
          width: '100%',
          marginLeft: config('theme.container.center') ? 'auto' : '',
          marginRight: config('theme.container.center') ? 'auto' : '',
          paddingLeft: config('theme.container.padding'),
          paddingRight: config('theme.container.padding'),
          ...containersSizes,
        }
      })
    })
  ],
}
