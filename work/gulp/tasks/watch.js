var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js');

gulp.task('watch', function() {

  // scssファイルへの変更を監視してsassタスクを実行する
  watch([config.src + '/**/*.scss', config.scss + '/**/*.scss'], function () {
    gulp.start(['sass']);
  })
});