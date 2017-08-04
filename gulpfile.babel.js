import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task('default', ['svgmin', 'webp']);

gulp.task('svgmin', () => {
    gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('webp', () => {
    gulp.src('src/img/*')
        .pipe(webp())
        .pipe(gulp.dest('dist/img'));
});