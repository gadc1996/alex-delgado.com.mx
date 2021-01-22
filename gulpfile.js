'use strict'

const gulp = require('gulp');

const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
sass.compiler = require('node-sass');

//Javascript plugins
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

//Turns css in to min.css
function cleancss(){
	return gulp.src('./assets/css/style.css')
	.pipe(uglifycss())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./assets/css'));
}
//Turns js into min.js
function cleanjs(){
				return gulp.src('./assets/js/*.js')
				.pipe(babel({
					presets: ['@babel/preset-env']
				}))
				.pipe(uglify())
				.pipe(rename(function(path){
					path.extname = '.min.js';
				}))
				.pipe(gulp.dest('./assets/js/min/'));
}

function watch(){
	gulp.watch('assets/sass/*.sass',gulp.series('css'));
}
exports.cleanjs = cleanjs;
exports.cleancss = cleancss;
exports.default = watch; 
