var gulp = require("gulp");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var cssmin = require('gulp-cssmin');



gulp.task('lint', function() {
    return gulp.src('./jquery.layer.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('js', function() {
    return gulp.src('jquery.layer.js')
        .pipe(uglify())
        .pipe(rename('jquery.layer.min.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('css', function() {
    gulp.src('jquery.layer.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./'));
});