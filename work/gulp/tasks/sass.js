var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");
var config = require('../config.js');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src(config.src + '/**/*.scss')
      .pipe(plumber({
        errorHandler: function(err) {
          console.log(err.messageFormatted);
          this.emit('end');
        }
      }))
      .pipe(sassGlob())
      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(gulp.dest(config.build));
});
