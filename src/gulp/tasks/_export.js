const gulp = require('gulp');
const config = require('../config');

gulp.task('export-accordio', () => {
  return gulp.src(config.source.files)
    .pipe(gulp.dest(`${config.demo.root}/components/Accordio`));
});
