var gulp = require('gulp');
var HubRegistry = require('gulp-hub');
var config = require('./gulp/config');

var hub = new HubRegistry(['./gulp/tasks/*.js']);
gulp.registry(hub);

gulp.task('watch', function () {
  gulp.watch(config.source.files, gulp.series('export-accordio'));
});

gulp.task('default', gulp.series('export-accordio', 'watch'));
