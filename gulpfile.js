var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var args = require('yargs').argv;
var run = require('run-sequence');

var config = require('./gulp.config');
var colors = $.util.colors;

var port = process.env.PORT || config.node.defaultPort;

gulp.task('help', function () {
  $.taskListing();
});

gulp.task('default', ['help']);

gulp.task('inject-vendor', function () {
  var wiredep = require('wiredep').stream;
  var options = {
    ignorePath: '../..'
  };


  return gulp
    .src(config.indexHtml)
    .pipe(wiredep(options))
    .pipe(gulp.dest(config.clientRootPath));

});

gulp.task('styles', ['fonts'], function () {
  return gulp
    .src(config.mainLessFile)
    .pipe($.plumber())
    .pipe($.less())
    .pipe(gulp.dest(config.tmpPath + 'css/'));
});

gulp.task('inject', ['styles', 'inject-vendor'], function () {

  return gulp
    .src(config.indexHtml)
    .pipe($.inject(gulp.src(config.clientJsFiles.concat([config.tmpPath + '**/*.css']), {
      read: false
    })))
    .pipe(gulp.dest(config.clientRootPath));

});

gulp.task('fonts', function () {
  return gulp
    .src(config.fontPaths)
    .pipe(gulp.dest(config.tmpPath + 'fonts'));
});

gulp.task('serve-dev', ['inject'], function () {
  return serve(true);
});



///////////////////// helper functions
/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log(colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log(colors.blue(msg));
  }
}

function serve(isDev) {
  return $.nodemon({
    script: config.serverRootPath + 'server.js',
    watch: config.serverJsFiles,
    delay: 2500,
    env: {
      'PORT': port,
      'NODE_ENV': isDev ? 'dev' : 'build'
    }
  })
    .on('restart', function (e) {
      log('******* nodemon restarted');
      changeEvent(e);

    })
    .on('start', function () {
      log('******* nodemon started');
      startBrowserSync(isDev, false);
    })
    ;

}
/**
* Start BrowserSync
 * --nosync will avoid browserSync
 */
function startBrowserSync(isDev, specRunner) {
  if (args.nosync || browserSync.active) {
    return;
  }

  log('Starting BrowserSync on port ' + port);

  // If build: watches the files, builds, and restarts browser-sync.
  // If dev: watches less, compiles it to css, browser-sync handles reload
  gulp.watch([config.clientJsFiles])
    .on('change', function (event) {
      if (event.type === 'added' || event.type === 'deleted') {
        log('js file added or removed, running inject');
        run('inject');
      }
    });
  gulp.watch([config.lessFiles], ['styles'])
    .on('change', changeEvent);

  var options = {
    proxy: 'localhost:' + port,
    port: 3000,
    files: isDev ? [
      config.clientRootPath + '**/*.*',
      '!' + config.lessFiles,
      config.tmpPath + '**/*.css'
    ] : [],
    watchOptions: {
      ignored: ['node_modules', 'bower_components']
    },
    ghostMode: { // these are the defaults t,f,t,t
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    logFileChanges: true,
    logLevel: 'info',
    logPrefix: 'tripform',
    notify: true,
    reloadDelay: 1000
  };
  //   if (specRunner) {
  //     options.startPath = config.specRunnerFile;
  //   }

  browserSync(options);
}


/**
 * When files change, log it
 * @param  {Object} event - event that fired
 */
function changeEvent(event) {
  var srcPattern = new RegExp('/.*(?=/' + config.srcPath + ')/');
  if (event.path) {
    var index = event.path.indexOf(config.srcPath);
    if (index >= 0)
      log('File ' + event.path.substring(index) + ' ' + event.type);
  }
}
