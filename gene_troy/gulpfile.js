// Declare all dependencies
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

// All files to watch and lint
var files = ['test/*.js', '*.js', '!node_modules/**', '!**.json'];

// Task for testing
gulp.task('mocha', function() {
  return gulp.src('test/*.js').pipe(mocha());
});

// Task for linting
gulp.task('eslint', function() {
  return gulp.src(files)
    .pipe(eslint({
      env: {
        node: true,
        mocha: true,
        es6: true
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Task for watching (default is to run all tasks and watch)
gulp.task('default', function() {
  gulp.watch(files, ['eslint', 'mocha']);
});
