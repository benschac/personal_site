const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');




gulp.task('default', ['serve'], () => {
  console.log('testing');
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: '.'
  })

    gulp.watch("src/styles/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('sass', () => {
  return gulp.src('src/styles/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('dist/styles/styles'))
             .pipe(browserSync.stream());
})
