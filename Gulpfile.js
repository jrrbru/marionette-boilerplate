var gulp = require('gulp'),
	concat = require('gulp-concat'),
	dust = require('gulp-dust'),
	wrap = require('gulp-wrap-amd');

// Build all templates
gulp.task('templates', function() {
	return gulp.src('js/templates/**/*.dust')
		.pipe(dust({
			name: function (file) {
				var relative = file.relative;
				return relative.substr(0, relative.lastIndexOf('.')).replace("\\", ":");
			}
		}))
		.pipe(concat('templates.js'))
		.pipe(wrap({
			deps: ['dust'],
			exports: [true]
		}))
		.pipe(gulp.dest('js'));
});

gulp.task('default', ['templates']);