var gulp = require( 'gulp' );
var debug = require('gulp-debug');
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function () {
	return gulp.src(['./src/app/scss/index.scss'])
		.pipe( sass().on('error', sass.logError) )
		.pipe( debug() )
		.pipe( gulp.dest( './build/app/css' ) );
} );
