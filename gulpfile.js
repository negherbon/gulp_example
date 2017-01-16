'use strict';
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const options = {
    'distPaths':{
        'baseApp': 'dist',
        'styles': 'dist/css',
        'index': 'dist',
    },
    'devPaths':{
        'index': 'src/index.html',
    }};


const plugins = gulpLoadPlugins({
    rename: {
        'gulp-angular-templatecache': 'templateCache'
    }
});

require( 'load-gulp-tasks' )( gulp, options, plugins );







