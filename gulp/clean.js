var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require( '../package.json' ).config;

gulp.task('clean', function (cb) {
   rimraf(config.dist, cb);
});
