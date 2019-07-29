var gulp = require('gulp'),
	babel = require('gulp-babel'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
	del = require('del');

gulp.task('clean', function() {
	return del(['dist']);
});

gulp.task('transpile', ['clean'], function() {
	return gulp.src(['src/*.js'])
				.pipe(babel())
				.pipe(uglify())
				.pipe(minify({
					mangle: true
				}))
				.pipe(gulp.dest('dist'));
});

gulp.task('minify', ['transpile']);

