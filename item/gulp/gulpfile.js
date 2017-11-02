var gulp = require('gulp');//加载gulp 依赖
var htmlmin = require('gulp-htmlmin');//htmlmin 依赖
var cssclean = require('gulp-clean-css');//css 压缩依赖
var uglify = require('gulp-uglify');//js 压缩依赖
var fconcat = require('gulp-concat');//文件合并依赖
var frename = require('gulp-rename');//文件 重命名  依赖
var sass = require('gulp-sass');//sass 依赖

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// 静态服务器
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//html压缩
gulp.task('htmlmin', function () {
    gulp.src('./*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dest/'))
});
//js压缩
gulp.task('uglify', function () {
    gulp.src(['js/*.js', 'js1/*.js'])
        .pipe(fconcat('all.js'))
        .pipe(frename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dest/'))
});
//css 压缩
gulp.task('cssclean', function () {
    gulp.src('css/*.css')
        .pipe(fconcat('style.css'))
        .pipe(frename({suffix: '.min'}))
        .pipe(cssclean())
        .pipe(gulp.dest('dest/'))
});
gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('dest/'))
});

gulp.task('default', ['sass'], function () {

    gulp.watch('./sass/*.scss', ['sass']);

});
/*
gulp.task('default',['htmlmin','uglify','cssclean','browser-sync'],function(){
    gulp.watch('./!*.html',['htmlmin']);
    gulp.watch(['./js/!*.js','./js1/!*.js'],['uglify']);
    gulp.watch('./css/!*.css',['cssclean']);
    gulp.watch(['./!*.html','./js/!*.js','./js1/!*.js','./css/!*.css'],reload);
});
*/

