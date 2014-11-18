/*
 *  Gulp file
 *  @author Jesus Garcia <ctw@ctwhome.com>
 *
 *  Compile sass with compass, 
 *  open the browser with live reload 
 *  and watch for changes.
 *
 *  Note: install the modules in the dependences.
 */

/**
 * App vars
 */
var appPath = './'
var settings = {
    compass: {
        mainSass : appPath + 'assets/scss/style.scss',
        allStyles: appPath + 'assets/scss/**/*.scss',
        // It will generate the same name than the source
        dest     : appPath + 'assets/css',

        // Compass options
        sourcemap: true,
        // Styles: nested, expanded, compact, or compressed
        style    : 'nested',
        css      : appPath + 'assets/css',
        sass     : appPath + 'assets/scss',
        image    : appPath + 'assets/img',
        fonts    : appPath + 'assets/css/fonts',
        temp     : appPath + 'assets/css'
    },
    scripts: {
        src       : appPath + 'assets/js/*.js',
        dest      : 'app.min.js',
        folderDest: appPath + 'assets/js'
    },
    server : {
        host: "localhost",
        port: "8080"
    }
}

/*
 * Requirements
 */
var gulp = require('gulp');

var plumber = require('gulp-plumber');                  // Prevent pipe breaking caused by errors from gulp plugins
var compass = require('gulp-compass');
// var uglify      = require('gulp-uglify');            // Minify scripts
// var concat      = require('gulp-concat');

// Serve, open and livereload
var webserver = require('gulp-webserver');
var opn = require('opn');
var livereload = require('gulp-livereload');

/*
 * Compile Sass with compass and sourcemaps
 */
gulp.task('compass', function () {
    return gulp.src(settings.compass.mainSass)
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(compass({
            sourcemap: settings.compass.sourcemap,
            style    : settings.compass.style,
            css      : settings.compass.css,
            sass     : settings.compass.sass,
            image    : settings.compass.image
        }))
        .on('error', function (err) {
            // Would like to catch the error here
        })

        .pipe(gulp.dest(settings.compass.temp));
});

/*
 * Compile js
 */
//  gulp.task('scripts', function(){
//      return gulp.src(settings.scripts.src)                    // Anything with js extension
//      .pipe(concat(settings.scripts.dest))              // concat in destinifile
//      //.pipe(uglify())                                 // Minimize
//      .pipe(gulp.dest(settings.scripts.folderDest));
//  });

//
// Run server
//
gulp.task('webserver', function() {
    return gulp.src( appPath )
        .pipe(webserver({
            host:             settings.server.host,
            port:             settings.server.port,
            livereload:       true,
            directoryListing: false
        }));
});

/*
 * Open browser
 */
gulp.task('openbrowser',['webserver'], function () {
    return opn('http://' + settings.server.host + ':' + settings.server.port);
});

/*
 * Watch listener
 */
gulp.task('watch', function () {
    //gulp.watch(settings.compass.allStyles, ['compass']);
    livereload.listen();
    gulp.watch(appPath + '**').on('change', livereload.changed);
});

/*
 *  Defaul task
 */
// gulp.task('default', ['compass', 'openbrowser', 'watch']);
gulp.task('default', ['openbrowser', 'watch']);
