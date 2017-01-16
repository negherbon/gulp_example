module.exports = function(gulp, options, plugins) {
    gulp.task('cssfy', function () {
        const bowerFiles = require('main-bower-files');
        const cssBowerFiles = bowerFiles({
            filter: /\.css$/i,
            // filter:  /\.css$|\.less$/i,
            includeDev: true,
            paths: {
                bowerDirectory: './src/assets/bower_components',
                bowerJson: './src/assets/bower.json'
            }
        });
        cssBowerFiles.push('src/assets/bower_components/bootstrap/dist/css/bootstrap.min.css');
        console.log(cssBowerFiles);
        gulp.src(cssBowerFiles)
            .pipe(
                plugins.concat('dependencies.css')
            )
            .pipe(
                plugins.uglifycss()
            )
            .pipe(
                plugins.rev()
            )
            .pipe(
                gulp.dest('dist/css')
            );
    });
};