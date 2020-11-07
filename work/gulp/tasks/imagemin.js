var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config.js')

gulp.task('imagemin', function() {
  return gulp.src(config.src + '/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest(config.build));
});

