let gulp            = require('gulp'),
	scss            = require('gulp-sass'),
	browserSync     = require('browser-sync'),
	autoprefixer    = require('gulp-autoprefixer'),
	nunjucks        = require('gulp-nunjucks'),
	concat          = require('gulp-concat'),
	iconfont        = require('gulp-iconfont'),
	iconfontCss     = require('gulp-iconfont-css'),
	del 			= require('del');


gulp.task('scss', function() {
	return gulp.src('src/style/main.scss')
		.pipe(scss().on( 'error', function( error )
			{console.log( error );} )
		)
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], {cascade:true}))
		.pipe(gulp.dest('src/style'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('nunjucks', function () {
	return gulp.src('src/template/index.html')
		.pipe(nunjucks.compile())
		.pipe(gulp.dest('src'))
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('iconfont', function(){
	gulp.src(['src/icon/*.svg'])
		.pipe(iconfontCss({
			fontName: 'mogo-icons',
			path: 'src/style/templates/_icons.scss',
			targetPath: '../style/_icons.scss',
			fontPath: '../font/'
		}))
		.pipe(iconfont({
			fontName: 'mogo-icons',
			normalize: true,
			fontHeight: 1001
		}))
		.pipe(gulp.dest('src/font/')
	);
});

gulp.task('default', ['browser-sync', 'nunjucks', 'scss'], function() {
	gulp.watch('src/style/**/*.scss', ['scss']);
	gulp.watch('src/template/**/*.html', ['nunjucks', browserSync.reload]);
	gulp.watch('src/style/**/*.css', browserSync.reload);
	gulp.watch('src/script/**/*.js', browserSync.reload);
});

gulp.task('clean', function(){
	return del.sync('docs');
});

gulp.task('build', ['clean', 'nunjucks', 'scss'], function() {
	var buildHtml = gulp.src('src/[^_]*.html')
	.pipe(gulp.dest('docs'));
	
	var buildCss = gulp.src('src/style/**/*.css')
	.pipe(gulp.dest('docs/style'));
	
	var buildJs = gulp.src('src/script/**/*.js')
	.pipe(gulp.dest('docs/script'));

	var buildFonts = gulp.src('src/font/**/*.*')
	.pipe(gulp.dest('docs/font'));

	var buildImg = gulp.src('src/img/**/*.*')
	.pipe(gulp.dest('docs/img'));
});