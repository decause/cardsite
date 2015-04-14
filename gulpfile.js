var gulp        = require('gulp');

gulp.task('semantic-css', function () {
    return gulp
        .src('bower_components/semantic-ui/dist/semantic.css')
        .pipe(gulp.dest('static/css/'));
});

gulp.task('semantic-js', function () {
    return gulp
        .src('bower_components/semantic-ui/dist/semantic.js')
        .pipe(gulp.dest('static/js/'));
});

gulp.task('semantic-fonts', function () {
    return gulp
        .src('bower_components/semantic-ui/dist/themes/basic/assets/fonts/*')
        .pipe(gulp.dest('static/img/'));
});

gulp.task('default', ['semantic-css', 'semantic-js', 'semantic-fonts']);
