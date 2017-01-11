var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var gulpsync = require('gulp-sync')(gulp);
var options = {
    'distPaths':{
        'baseApp': 'dist',
        'styles': 'dist/css',
        'index': 'dist',
    },
    'devPaths':{
        'index': 'src/index.html',
    }};


var plugins = gulpLoadPlugins({
    rename: {
        'gulp-angular-templatecache': 'templateCache'
    }
});

gulp.task('run', gulpsync.sync(['cleanDist','uglify', 'cssfy', 'main','app','index','cacheHtml']));

gulp.task('default',function(){
    gulp.run('run');

});

gulp.task('cleanDist', function () {
    return gulp.src('dist', {read: false})
        .pipe(plugins.clean());
});
gulp.task('cacheHtml',function(){
    return gulp.src('src/app/**/*.html')
        .pipe(plugins.templateCache())
        .pipe(
            plugins.rev()
        )
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uglify',function(){

    const bowerFiles = require('main-bower-files');
    const jsBowerFiles = bowerFiles({
        filter:  /\.js$/i,
        includeDev:true,
        paths: {
            bowerDirectory: './src/assets/bower_components',
            bowerJson: './src/assets/bower.json'
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


gulp.task('cssfy',function(){

    const bowerFiles = require('main-bower-files');
    const cssBowerFiles = bowerFiles({
        //filter:  /\.css$/i,
        filter:  /\.css$|\.less$/i,
        includeDev:true,
        paths: {
            bowerDirectory: './src/assets/bower_components',
            bowerJson: './src/assets/bower.json'
        }
    });
    console.log(cssBowerFiles);
    return gulp.src(cssBowerFiles)
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

gulp.task('main',function(){

    const jsFiles = [
        'src/app/controllers/**/*.js'];
    return gulp.src(jsFiles)
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

gulp.task('app',function(){

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

gulp.task('index',function(){
    const styles =  options.distPaths.styles+'/**/*.css';
    var scripts;
    const es = require('event-stream');
    scripts = [
        options.distPaths.baseApp+'/js/dependencies-*.js',
        options.distPaths.baseApp+'/js/app-*.js',
        options.distPaths.baseApp+'/js/main-*.js',
        options.distPaths.baseApp+'/js/templates-*.js',
    ];
    console.log(scripts);

    console.log(options.distPaths.index);

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





