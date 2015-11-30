'use strict';

var argv        = require('yargs').argv;
var browserSync = require('browser-sync').create();
var concat      = require('gulp-concat');
var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var modRewrite  = require('connect-modrewrite');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var ts          = require('gulp-typescript');
var uglify      = require('gulp-uglify');

var nosourcemaps = argv.nosourcemaps;
if (nosourcemaps)
   process.stdout.write("-- generating static files with no sourcemaps -- \n");

// combine and compile css with sourcemaps
gulp.task('css', function () {
   if (nosourcemaps) {
      return gulp.src(['css/*.css', 'css/sass/*.scss'])
         .pipe(sass())
         .pipe(minifyCss())
         .pipe(concat('all.min.css'))
         .pipe(gulp.dest('css/dist/'))
         .pipe(browserSync.stream());
   }
   else {
      return gulp.src(['css/*.css', 'css/sass/*.scss'])
         .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(minifyCss())
         .pipe(concat('all.min.css'))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest('css/dist/'))
         .pipe(browserSync.stream());
   }
});

// combine and compile js with sourcemaps
gulp.task('js', function () {
   if (nosourcemaps) {
      return gulp.src(['js/**/*.ts', '!js/dist/*.js'])
         .pipe(ts({
            noImplicitAny: true,
            outFile: 'js/dist/out.js',
            declaration: false
         }))
         .pipe(uglify())
         .pipe(concat('all.min.js'))
         .pipe(gulp.dest('js/dist/'))
         .pipe(browserSync.stream());
   }
   else {
      return gulp.src(['js/**/*.ts', '!js/dist/*.js'])
         .pipe(sourcemaps.init())
         .pipe(ts({
            noImplicitAny: true,
            outFile: 'js/dist/out.js',
            declaration: false
         }))
         .pipe(uglify())
         .pipe(concat('all.min.js'))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest('js/dist/'))
         .pipe(browserSync.stream());
   }
});

// default gulp task to generate scripts & css
gulp.task('default', ['css', 'js']);

// run browser-sync server and watch for sass changes
gulp.task('serve', ['css', 'js'], function () {
  	browserSync.init({
      server: {
         baseDir: "./",
         middleware: [
            // angular html5 mode apache rewrite
            modRewrite([
               '!\\.\\w+$ /index.html [L]'
            ])
         ]
      }
  	});

   gulp.watch('css/**/*.scss', ['css']).on('change', browserSync.reload);
   gulp.watch(['js/**/*.js', 'js/**/*.ts', '!js/dist/*.js'], ['js']).on('change', browserSync.reload);
   gulp.watch("**/*.html").on("change", browserSync.reload);
});
