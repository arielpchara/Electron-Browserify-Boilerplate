var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var debug = require( 'gulp-debug' );

gulp.task( 'sass', function () {
	return gulp.src([
            './src/app/scss/**/*.scss',
            '!./src/app/scss/**/_*.scss',
            '!./src/app/scss/_**/*',
        ])
		.pipe( sass() )
		.pipe( debug() )
		.pipe( gulp.dest( './dest/app/css' ) );
} );
