var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('help', function() {
    $.taskListing();
});

gulp.task('default', ['help']);