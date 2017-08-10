var gulp = require('gulp')

gulp.task('copy', function () {
    gulp.src([
    	'./bower_components/bootstrap/fonts/*.eot',
    	'./bower_components/bootstrap/fonts/*.svg',
    	'./bower_components/bootstrap/fonts/*.ttf',
    	'./bower_components/bootstrap/fonts/*.woff',
    	'./bower_components/bootstrap/fonts/*.woff2',
    	])
        .pipe(gulp.dest('./assets/fonts'));
});