var gulp = require('gulp');
var del = require('del');
var config = require('../package.json').config;

var globby = require('globby');

gulp.task('clean', function(cb) {
  del([
      '**/*.*',
      '!**/node_modules/**/*'
    ], {
      cwd: config.dist
    })
    .then(function(paths) {
      console.log('Deleted files/folders:\n', paths.join('\n'));
      cb();
    });
});


gulp.task('clean:all', function(cb) {
  del([
      '*'
    ], {
      cwd: config.dist
    })
    .then(function(paths) {
      console.log('Deleted files/folders:\n', paths.join('\n'));
      cb();
    });
});
