import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('default', () =>
    gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest('dist/img'))
);