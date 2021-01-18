'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

//Turns sass insto css.min
function css(){
	return gulp.src('./assets/sass/*.sass')
	.pipe(sass())
	.pipe(uglifycss())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./assets/css'));
}

function watch(){
	gulp.watch('assets/sass/*.sass',gulp.series('css'));
}
exports.css = css;
exports.default = watch; 
