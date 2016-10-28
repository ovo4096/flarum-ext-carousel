var gulp = require('flarum-gulp');

gulp({
  files: [
    'node_modules/slick-carousel/slick/slick.js'
  ],
  modules: {
    'hao/hello': 'src/**/*.js'
  }
});
