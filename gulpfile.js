// gulp编译scss
// cnpm install -g gulp
// 不全局按一遍可能不好使
// cnpm install gulp --save-dev
// cnpm install gulp-sass --save-dev
// gulp styles
// 嵌套输出方式 nested
// 展开输出方式 expanded 
// 紧凑输出方式 compact 
// 压缩输出方式 compressed

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('sass', function () {
  return gulp.src('styles/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('styles/css'))
});
gulp.task("babel", function () {
  return gulp.src("scripts/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("scripts/es5"));
});
gulp.task('serve', ['sass','babel'], function () {
  gulp.watch('styles/scss/**/*.scss', ['sass']);
  gulp.watch('scripts/es6/**/*.js', ['babel']);
  browserSync.init({
    files:['**'],
    server: {
      baseDir: './',
      index:'index.html'
    },
    port:1205
  });
});