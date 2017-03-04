module.exports = function(gulp, options, plugins) {
    gulp.task('index', function () {
        const styles = options.distPaths.styles + '/**/*.css';
        var scripts;
        const es = require('event-stream');
        scripts = [
            options.distPaths.baseApp + '/js/dependencies-*.js',
            options.distPaths.baseApp + '/js/templates-*.js',
            options.distPaths.baseApp + '/js/app-*.js',
            // options.distPaths.baseApp + '/js/main-*.js',

        ];

        return gulp.src(options.devPaths.index)
            .pipe(
                plugins.inject(
                    es.merge(
                        gulp.src(styles, {
                            read: false
                        }),
                        gulp.src(scripts, {
                            read: false
                        })
                    ), {
                        addRootSlash: false,
                        ignorePath: 'dist'
                    }
                )
            )
            .pipe(
                gulp.dest(options.distPaths.index)
            );
    });

};
