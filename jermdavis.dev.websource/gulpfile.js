/// <binding BeforeBuild='less' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var less = require("gulp-less");
var cleanCSS = require('gulp-clean-css');

var project = require('./config.json');

gulp.task("less", function () {
    return gulp.src('Styles/default.less')
      .pipe(less())
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest(project.webroot + '/css'));
});

gulp.task("deploy", function () {
    return gulp.src([
            project.webroot + '/**/*.*',
            '!' + project.webroot + '/**/*.config'
        ])
        .pipe(gulp.dest(project.deployTarget + '/'));
});