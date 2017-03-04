module.exports = function(gulp, options, plugins) {
    gulp.task('cleanDist', function () {
         return gulp.src('dist', {read: false})
            .pipe(plugins.clean());
    });
};
