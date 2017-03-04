module.exports = function(gulp, options, plugins) {
    gulp.task('uglify', function () {
        const bowerFiles = require('main-bower-files');
        const jsBowerFiles = bowerFiles({
            filter:  /\.js$/i,
            includeDev:true,
            paths: {
                bowerDirectory: './bower_components',
                bowerJson: './bower.json'
            }
        });

        return gulp.src(jsBowerFiles)
            .pipe(
                plugins.concat('dependencies.js')
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
