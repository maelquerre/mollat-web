const mix = require('laravel-mix');

mix
  .sass('src/scss/index.scss', 'public/css/index.css')
  .options({
    processCssUrls: false,
  })
  .js('src/js/index.js', 'public/js/index.js')
  .copy('src/images/', 'public/images/', false);
