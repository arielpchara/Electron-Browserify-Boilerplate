var gulp = require( 'gulp' );
var requireDir = require( 'require-dir' );
var runSequence = require('run-sequence');

requireDir( './gulp' );


gulp.task('watch',['compile'],function () {
    gulp.watch(['src/**/*'], ["compile"]);
});

gulp.task('default',['compile']);
