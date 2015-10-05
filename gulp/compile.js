var gulp = require( 'gulp' );

gulp.task( 'compile', [
	'browserify',
	'nunjucks',
	'sass'
] );
