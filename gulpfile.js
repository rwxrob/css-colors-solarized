var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    autoprefix = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename');

gulp.task('styles', function(){
  gulp.src('src/styles/colors-solarized.styl')
    .pipe(gulp.dest('styles'))
    .pipe(stylus())
    .pipe(autoprefix('last 2 versions'))
    .pipe(rename('colors-solarized.css'))
    .pipe(gulp.dest('styles'))
    .pipe(cssmin())
    .pipe(rename('colors-solarized.min.css'))
    .pipe(gulp.dest('styles'));
  gulp.src('src/styles/demo.styl')
    .pipe(gulp.dest('styles'))
    .pipe(stylus())
    .pipe(autoprefix('last 2 versions'))
    .pipe(rename('demo.css'))
    .pipe(gulp.dest('styles'))
    .pipe(cssmin())
    .pipe(rename('demo.min.css'))
    .pipe(gulp.dest('styles'));
});

gulp.task('html', function(){
  gulp.src('src/html/*.html')           
    .pipe(gulp.dest('.'));
});

gulp.task('clean',function(){
  gulp.src(['*.html', '*.ico', 'images', 'scripts', 'styles'],
    {read: false})
    .pipe(clean());
});

gulp.task('default',['styles','html'],function(){
  gulp.watch('src/styles/*.styl', ['styles','html']);
  gulp.watch('src/html/*.html', ['html']);
});
