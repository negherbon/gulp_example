module.exports = function (gulp, options, plugins) {
    const gulpsync = require('gulp-sync')(gulp);
    gulp.task('default', gulpsync.sync([ 'cleanDist',
        'uglify',
        'cssfy',
        'main',
        'cacheHtml',
        'app',
        'index']));
};


