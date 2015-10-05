var gulp = require( 'gulp' );
var atom = require( 'gulp-atom' );

gulp.task( 'atom', function () {
	atom( {
		srcPath: './dest',
		releasePath: './build',
		cachePath: './cache',
		version: 'v0.33.3',
		rebuild: false,
		platforms: [ 'win32-x64' ]
	} );
} );
