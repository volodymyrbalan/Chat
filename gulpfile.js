var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');

//server
gulp.task('start', function() {
  gulp.src('./app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

//style
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});