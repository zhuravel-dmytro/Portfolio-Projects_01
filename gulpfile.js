'use strict'

var gulp = require('gulp'),
    less = require('gulp-less');


gulp.task('mytask', function() {
    console.log('перевірка');
});

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('app/less/**/*less') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});