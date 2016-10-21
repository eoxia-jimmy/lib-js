var gulp 		= require('gulp');
var please 	= require('gulp-pleeease');
var less 		= require('gulp-less');
var watch 	= require('gulp-watch');
var plumber = require('gulp-plumber');
var rename 	= require("gulp-rename");
var cssnano = require('gulp-cssnano');
var concat 	= require('gulp-concat');
var glob 		= require("glob");
var uglify 	= require('gulp-uglify');

var paths = {
	all_js: ['../lib/init.js', '../**/*.lib.js']
};

gulp.task('js', function() {
	return gulp.src(paths.all_js)
	.pipe(concat('lib.min.js'))
	.pipe(gulp.dest('../'))
})

gulp.task('default', function() {
	gulp.watch(paths.all_js, ["js"]);
});
