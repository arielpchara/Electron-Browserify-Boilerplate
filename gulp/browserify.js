var gulp = require( 'gulp' );
var browserify = require( 'browserify' );
var gutil = require('gulp-util');
var source = require( 'vinyl-source-stream' );

gulp.task("browserify", function() {

    var bundler = browserify({
        entries: ['./src/app/js/main.js'],
        debug: true
    });

    return bundler.bundle()
        .pipe(source('start.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('./build/app/js'));

});
