var
  gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', connect.server({
  root: ['.'],
  port: 8080,
  livereload: true,
  open: {
    browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome'
  }
}));

gulp.task('html', function () {
  gulp.src('./**')
    .pipe(connect.reload());
});


gulp.task('watch', function () {
  gulp.watch(['./**'], ['html']);
});

gulp.task('default', ['connect','html', 'watch']);