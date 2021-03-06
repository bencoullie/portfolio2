// Plugins

var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');
var haml = require('gulp-ruby-haml');

// Compile Haml into HTML

gulp.task('haml', function() {
  gulp.src('haml/**/*.haml', {read: true}).
       pipe(haml()).
       pipe(gulp.dest(''));
});

// Compile all SCSS to CSS

gulp.task('sass', function () {
  return sass('css/dev/custom.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

// Commpile all JS to ECMA5

gulp.task('babel', function() {
  return gulp.src('js/dev/main.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('js'));
});

// The default task (runs all designated tasks on 'gulp')
gulp.task('default', ['babel', 'sass', 'haml']);
