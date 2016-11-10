var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./gulp.config');
var nodemon = require('gulp-nodemon');


gulp.task('help', function() {
    $.taskListing();
});

gulp.task('default', ['help']);

gulp.task('serve-dev', function() {
    nodemon({
        script: config.serverRootPath + 'server.js',
        watch: config.serverJsFiles,
        delay: 2500,
    });
});
