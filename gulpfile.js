// jshint esversion: 6
const { src, dest, watch, series } = require('gulp');
var sass = require('gulp-sass'),
    browserSync = require('browser-sync');
function css() {
      return src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./css'));      
}
function sass_watch(done) {
      watch('./css/*scss', css);      
      done();
}
function browser_sync(done) {
      var files = [
            './*.html',
            './css/*.css',
            './images/*.*'
      ];
      browserSync.init(files, {
            server: {
                  baseDir: './'
            }
      });
      done();
}
exports.sass = css;
exports.sass_watch = sass_watch;
exports.default = series(browser_sync, sass_watch);