var gulp        = require('gulp'),
    concat      = require('gulp-concat');

gulp.task('default', function () {
    return gulp.
        src('bower_components/semantic-ui-card/card.css')
        .pipe(gulp.dest('static/css/'));
});
