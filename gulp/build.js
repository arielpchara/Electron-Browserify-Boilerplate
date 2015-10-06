var gulp = require( 'gulp' );
var gulpSequence = require('gulp-sequence');

gulp.task( 'build', gulpSequence('clean','copy','browserify','sass') );

gulp.task( 'build:watch', ['build'] , function () {
  gulp.watch( ['src/**/*'] , ['build'] );
} );
