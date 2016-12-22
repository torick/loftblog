var gulp = require("gulp"),
browserSync = require('browser-sync');

//Server
gulp.task('server', function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

//Watcher

gulp.task('watch', function() {
  gulp.watch([
    'app/*.html/',
    'app/js/**/*.js',
    'app/css/**/*/js',
    ]).on('change', browserSync.reload);
});

//Main task

gulp.task('default', ['server', 'watch']);