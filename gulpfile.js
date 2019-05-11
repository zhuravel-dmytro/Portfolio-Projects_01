var gulp = require('gulp'),
    less = require('gulp-less');


gulp.task('mytask', function() {
    console.log('перевірка');
});

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-less
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});