var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
// var reactify = require( 'reactify' );
var gutil = require('gulp-util');
var source = require( 'vinyl-source-stream' );

gulp.task("browserify", function() {

    var bundler = browserify({
        entries: ['./src/app/js/main.js'],
        debug: true
    });

    return bundler.bundle()
        .pipe(source('bundle.js'))
        // .pipe(sourcemaps.init())
        // .pipe( uglify() )
        .on('error', gutil.log)
        // .pipe(sourcemaps.write('./source/'))
        .pipe(gulp.dest('./dest/app/js'));

});

// gulp.task( 'browserify', function () {
// 	var bundler = browserify( {
// 		entries: [ './component/app.js' ],
// 		transform: [ reactify ]
// 	} );
// 	return bundler.bundle()
// 		.pipe( source( 'app.js' ) )
// 		.pipe( gulp.dest( './compile' ) );
// } );
