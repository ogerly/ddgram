var gulp = require("gulp");
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');


gulp.task('pug', function () {
   return gulp.src('views/**/*.pug')
     .pipe(plumber())
     .pipe(pug({pretty:true}))
     .pipe(gulp.dest('public'));
 });

 gulp.task('watch', function () {
    gulp.watch('views/**/*.pug', gulp.series('public'));
 });

//gulp.task('default', ['pug', 'watch']);
gulp.task('default', gulp.series(gulp.parallel('pug', 'watch')))
 