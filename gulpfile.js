var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imageMin', () =>
    gulp.src('WebsiteOptimization/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/'))
);

gulp.task('default', function(){
    return console.log('Gulp problems');
});