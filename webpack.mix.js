const mix = require('laravel-mix')
const path = require('path')

mix
  .js('src/js/index.js', 'public/js/index.js')
  .css('src/css/index.css', 'public/css/index.css')
  .options({
    processCssUrls: false,
  })
