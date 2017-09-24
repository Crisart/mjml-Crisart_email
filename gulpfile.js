const gulp = require('gulp')
const mjml = require('gulp-mjml')
const rename = require('gulp-rename')
const beautify = require('gulp-html-beautify')
const browser = require('browser-sync')
const tinypng = require('gulp-tinypng')

gulp.task ('mjml', () => {
	gulp.src('./src/mjml/input.mjml')
		.pipe(mjml())
		.pipe(rename('index.html'))
		.pipe(beautify({indentSize: 2}))
		.pipe(gulp.dest('./'))
		.pipe(browser.stream())
})
gulp.task('browser', () => {
	browser.init({server: { baseDir: './'}})
})
gulp.task ('default', ['mjml', 'browser'], () => {
	gulp.watch('./src/mjml/*.*', ['mjml'])
})
gulp.task('tinypng', () => {
	gulp.src('./src/images/**/*.*')
	.pipe(tinypng('GUfbgZFPpPWtVQLzx9CKM6u9oSAmvDWu'))
	.pipe(gulp.dest('./images'))
})
