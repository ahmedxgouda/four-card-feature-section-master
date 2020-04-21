// jshint esversion: 6
import { src, dest, watch, series } from 'gulp';
import sass, { logError } from 'gulp-sass';
import { init } from 'browser-sync';
function css() {
      return src('./css/*.scss')
      .pipe(sass().on('error', logError))
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
      init(files, {
            server: {
                  baseDir: './'
            }
      });
      done();
}
const _sass = css;
export { _sass as sass };
const _sass_watch = sass_watch;
export { _sass_watch as sass_watch };
const _default = series(browser_sync, sass_watch);
export { _default as default };