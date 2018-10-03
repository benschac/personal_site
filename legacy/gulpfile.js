const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const sourcemap = require('gulp-sourcemaps');
const concat = require('gulp-concat-css');



gulp.task('default', ['serve'], () => {
  console.log('testing');
});

gulp.task('serve', ['sass:watch', 'html:watch'], () => {
  browserSync.init({
    server: '.'
  })
});

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});


gulp.task('sass', ['clean'], () => {
  return gulp.src('src/styles/*.scss')
             .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
             .pipe(sourcemap.init())
             .pipe(autoprefixer({
               browsers: ['last 2 versions'],
               cascade: false
             }))

             .pipe(concat("./style.css"))
             .pipe(sourcemap.write())
             .pipe(gulp.dest('./dist/styles/'))
             .pipe(browserSync.stream());
})

gulp.task('sass:watch',() => {
  gulp.watch("src/styles/*.scss", ['sass']);
});

gulp.task('html:watch', () => {
  gulp.watch("*.html").on('change', browserSync.reload);
})
