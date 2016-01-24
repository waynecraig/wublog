"use strict";
const gulp = require('gulp');
//const webpack = require('webpack-stream');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('jsx', function() {
	return gulp.src('components/*.jsx')
		.pipe(babel({presets: ['react','es2015']}))
		.pipe(rename({extname:'.js'}))
		.pipe(gulp.dest('components'));
});

gulp.task('node', function() {
	return gulp.src('index.js')
		.pipe(webpack({
			target: 'node',
			output: {
				filename: 'index.js'
			},
			module: {
				loaders: [
					{
						test: /\.json$/,
						loader: 'json'
					},
					{
						test: /\.jsx?$/,
						loader: 'babel?presets[]=react,presets[]=es2015'
					}
				]
			}
		}))
		.pipe(gulp.dest('dist/server'));
});
