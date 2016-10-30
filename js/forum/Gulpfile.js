var gulp = require('gulp');
var flarumGulp = require('flarum-gulp');

gulp.src('node_modules/slick-carousel/slick/slick.less').pipe(gulp.dest('../../less/forum'));

flarumGulp({
  files: [
    'node_modules/slick-carousel/slick/slick.js'
  ],
  modules: {
    'hao/hello': 'src/**/*.js'
  }
});
