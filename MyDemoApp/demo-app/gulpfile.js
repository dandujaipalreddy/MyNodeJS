// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'routes/*.js'];

gulp.task('default', ['watch']);
// JS hint task
gulp.task('jshint', function() {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            'verbose': true
        })).pipe(jscs());
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['jshint']);
});

gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var options={
      bowerJson : require('./bower.json'),
      directory : './public/lib'
    }
    gulp.src('./views/*.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./views'));
});
