var gulp = require('gulp');
var zip = require('gulp-zip');
var del = require('del');
var install = require('gulp-install');
var runSequence = require('run-sequence');
var awsLambda = require("node-aws-lambda");
var bump = require('gulp-bump');

var gulp = require('gulp');
require('gulp-release-it')(gulp);

gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(bump({key: "version"}))
        .pipe(gulp.dest('./'));
});

gulp.task('modules', function() {
    return gulp.src('./package.json')
        .pipe(gulp.dest('dist/'))
        .pipe(install({production: true}));
});

gulp.task('zip', function() {
    return gulp.src(['dist/**/*', '!dist/package.json'])
        .pipe(zip('./tmp/dist.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('upload', function(callback) {
    awsLambda.deploy('./tmp/dist.zip', require('./config/'+process.env.APP), callback);
});

gulp.task('deploy', function(callback) {
    return runSequence(
        ['modules'],
        ['zip'],
        ['upload'],
        callback
    );
});