var fs = require( 'fs' );
var gulp = require( 'gulp' );
var gutil = require('gulp-util');
var data = require('gulp-data');
var nunjucks = require('gulp-nunjucks-html');
var frontMatter = require('gulp-front-matter');
var debug = require( 'gulp-debug' );

var nunjucksOpts = {
    searchPaths: ['src/app/templates'],
    tags: {
        variableStart: '{{{',
        variableEnd: '}}}'
    }
};

var context = function(file) {
    return {
        ngTemplates: fs.readdirSync('src/app/templates/ng-templates').map(function(filename) {
            return filename; // path.join('ng-templates',filename);
        })
    };
};

gulp.task('nunjucks', function() {
    return gulp.src(['./src/app/templates/*.html'])
        .on('error', gutil.log)
        .pipe(data(context))
        .pipe(frontMatter())
        .pipe(nunjucks(nunjucksOpts).on('error', gutil.log))
        .pipe(debug())
        .pipe(gulp.dest('./dest/app'));
});
