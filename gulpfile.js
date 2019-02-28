const gulp = require('gulp');
var sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');


function styles() {
    return gulp.src(['.src/scss/normalize.scss', '.src/scss/style.scss', '.src/scss/styleMedia.scss'])
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({ browsers: ['>0.1%'] }))
    .pipe(gulp.dest('./build/css'));
}

function watch() {
    gulp.watch('./src/scss/**/*.scss', styles);
}

gulp.task('styles', styles);
gulp.task('watch', watch);

