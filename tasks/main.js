module.exports = function(gulp, options, plugins) {
    gulp.task('main', function () {
        const jsFiles = [
            'src/app/controllers/**/*.js'];
        gulp.src(jsFiles)
            .pipe(
                plugins.concat('main.js')
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