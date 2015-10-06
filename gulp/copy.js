var gulp = require('gulp');
var debug = require('gulp-debug');
var merge = require('merge-stream');
var config = require( '../package.json' ).config;

gulp.task('copy', function() {
  return gulp.src(['index.js','**/templates/**/*.html','**/index.html','**/package.json'], {cwd:config.src}).pipe(debug())
    .pipe(gulp.dest(config.dist));
});
