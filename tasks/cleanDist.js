module.exports = function(gulp, options, plugins) {
    gulp.task('cleanDist', function () {
         gulp.src('dist', {read: false})
            .pipe(plugins.clean());
    });
};
