const gulp = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create()

// Компиляция EJS в HTML
function compileEJS() {
  return gulp
    .src('src/pages/*.ejs')
    .pipe(plumber())
    .pipe(ejs({}, {}, { ext: '.html' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
}

// Запуск сервера с автообновлением
function serve() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  })

  // Следим за изменениями в EJS и CSS
  gulp.watch('src/**/*.ejs', compileEJS)
  // gulp.watch('src/styles/*.css', copyCSS)
  gulp.watch('dist/*.html').on('change', browserSync.reload)
}

// Копирование CSS (опционально)
// function copyCSS() {
//   return gulp
//     .src('src/styles/*.css')
//     .pipe(gulp.dest('dist/styles'))
//     .pipe(browserSync.stream())
// }

// Основная задача
// exports.default = gulp.series(gulp.parallel(compileEJS, copyCSS), serve)
exports.default = gulp.series(gulp.parallel(compileEJS), serve)
