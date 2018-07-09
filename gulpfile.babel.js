import gulp from 'gulp'
import babel from 'gulp-babel'

gulp.task('css', () => {
  return gulp.src('src/**/*.cssx')
    .pipe(gulp.dest('lib'))
})

gulp.task('fonts', () => {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('lib/fonts/'))
})

gulp.task('default', ['css', 'fonts'], () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015', 'react', 'stage-0']
    }))
    .pipe(gulp.dest('lib'))
})
