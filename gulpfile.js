var gulp = require('gulp'),
    less = require('gulp-less-dev');

var less = require('gulp-less');
var path = require('path');
 
gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
});