var gulp = require('gulp');
var server = require('gulp-server-livereload');

//server
gulp.task('start', function() {
  gulp.src('./app')
    .pipe(server({
      livereload: true,
      open: true
    }));
});