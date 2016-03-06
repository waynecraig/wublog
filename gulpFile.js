"use strict";
const gulp = require('gulp');
const webpack = require('webpack-stream');
const rm = require('gulp-rm');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('clean', function() {
    return gulp.src('dist/**/*', {read: false})
        .pipe(rm({async: false}));
});

gulp.task('jsx', ['clean'], function() {
	return gulp.src('src/**/**.js')
        .pipe(watch('src/**/**.js'))
		.pipe(babel({presets: ['react']}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('json', ['clean'], function() {
	return gulp.src('src/**/**.json')
        .pipe(watch('src/**/**.json'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('style', ['clean'], function() {
    return gulp.src('src/styles/*.sass')
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.sass$/,
                        loader: "style!css!sass?indentedSyntax"
                    }
                ]
            },
            watch: true
        }))
        .pipe(uglify())
        .pipe(rename('style.js'))
        .pipe(gulp.dest('dist/static/js/'));
});

gulp.task('default', ['clean', 'jsx', 'json', 'style']);
