module.exports = function(gulp, options, plugins) {
    gulp.task('app', function () {
        const jsFiles = ['src/app/app.js'];
        return gulp.src(jsFiles)
            .pipe(
                plugins.concat('app.js')
            )
            .pipe(
                plugins.uglify()
            )
            .pipe(
                plugins.rev()
            )
            .pipe(
                gulp.dest('dist/js')
            );
    });
};