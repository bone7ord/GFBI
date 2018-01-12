const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// const imagemin = require('gulp-imagemin');


gulp.task('sass', () =>
  gulp.src('public/assets/scss/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
      .pipe(gulp.dest('public/assets/css'))
      .pipe(browserSync.stream())
);

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('public/assets/scss/*.scss', ['sass']);
  gulp.watch('public/*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './public'
    },
  })
});

// gulp.task('imagemin', function(){
//   return gulp.src('img/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('img-test'))
// });
