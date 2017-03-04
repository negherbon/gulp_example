module.exports = function(gulp, options, plugins) {
    gulp.task('cacheHtml', function () {
        return gulp.src('src/app/**/*.html')
            .pipe(plugins.templateCache({
              standalone: true
            }))
            .pipe(
                plugins.rev()
            )
            .pipe(gulp.dest('dist/js'));
    });
};
