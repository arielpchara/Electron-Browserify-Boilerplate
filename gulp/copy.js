var gulp = require('gulp');
var debug = require('gulp-debug');
var merge = require('merge-stream');

gulp.task('copy', function() {
  var app = gulp.src(['index.js','**/templates/*.html','**/index.html','**/package.json'],{cwd: './src'}).pipe(debug()).pipe(gulp.dest('./build'));
  return merge( app );
});
