module.exports = function(gulp, options, plugins) {
    gulp.task('cacheHtml', function () {
        gulp.src('src/app/**/*.html')
            .pipe(plugins.templateCache())
            .pipe(
                plugins.rev()
            )
            .pipe(gulp.dest('dist/js'));
    });
};
