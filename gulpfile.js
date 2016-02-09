"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const vinylPaths = require("vinyl-paths");
const del = require('del');


//babel transpile
gulp.task("go-babel", ()=>
{
	return gulp.src('src/**/*.js')
			.pipe(babel())
			.pipe(gulp.dest("./public/javascripts"))
});

//clean builds
gulp.task('clean', function()
{
	return gulp.src('./public/javascripts', {read: false})
			.pipe(vinylPaths(del));
});

//set up main task
gulp.task("default", ['clean', 'go-babel']);