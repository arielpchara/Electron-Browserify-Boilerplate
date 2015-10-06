var gulp = require('gulp');
var electron = require('gulp-electron');
var packageJson = require('../package.json');

gulp.task('electron', function() {
  gulp.src("")
    .pipe(electron({
      src: './build',
      packageJson: packageJson,
      release: './release',
      cache: './cache',
      version: 'v0.33.3',
      packaging: true,
      platforms: ['win32-ia32', 'darwin-x64'],
      platformResources: {
        darwin: {
          CFBundleDisplayName: packageJson.name,
          CFBundleIdentifier: packageJson.name,
          CFBundleName: packageJson.name,
          CFBundleVersion: packageJson.version
        },
        win: {
          "version-string": packageJson.version,
          "file-version": packageJson.version,
          "product-version": packageJson.version
        }
      }
    }))
    .pipe(gulp.dest(""));
});
