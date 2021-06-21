const mix = require('laravel-mix');

mix.sass('src/scss/index.scss', 'public/assets/css/index.css').js('src/js/index.js', 'public/assets/js/index.js');
