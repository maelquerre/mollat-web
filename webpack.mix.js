const mix = require('laravel-mix')

mix
  .css('src/css/index.css', 'public/assets/css/index.css')
  .js('src/js/index.js', 'public/assets/js/index.js')
