var gulp = require('gulp');
var connect = require('gulp-connect');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      // outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  var config = {
    locals: YOUR_LOCALS,
    basedir: __dirname
  };
 
  gulp.src('./index.jade')
    .pipe($.jade(config))
    .pipe(gulp.dest('./'));
    

    gulp.src('./includes/*.jade')
      .pipe($.jade(config))
      .pipe(gulp.dest('./includes'));
});

gulp.task('serve', function() {
  connect.server({
    root: './',
    livereload: false
  });
});

gulp.task('default', ['serve', 'sass', 'jade'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['includes/*jade', './index.jade'], ['jade']);
});