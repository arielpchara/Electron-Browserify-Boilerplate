var gulp = require( 'gulp' );
var debug = require('gulp-debug');
var sass = require( 'gulp-sass' );
var config = require( '../package.json' ).config;

gulp.task( 'sass', function () {
	return gulp.src(['app/scss/*.scss'], {cwd:config.src})
		.pipe( sass().on('error', sass.logError) )
		.pipe( debug() )
		.pipe( gulp.dest( 'app/css', {cwd:config.dist}));
} );
