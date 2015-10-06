var gulp = require( 'gulp' );
var gulpSequence = require('gulp-sequence');
var config = require( '../package.json' ).config;

gulp.task( 'build', gulpSequence('clean','copy','browserify','sass') );

gulp.task( 'build:watch', ['build'] , function (){
  gulp.watch( ['**/*'],  {cwd:config.src}, ['build']);
});

gulp.task( 'build:dev', ['build:watch'] , function (cb){
  require("child_process").spawn("electron",['./build'],{cwd:process.cwd()});
});
