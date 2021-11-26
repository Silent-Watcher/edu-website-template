const gulp = require("gulp");
const imageMinify = require("gulp-imagemin");
const concatFiles = require("gulp-concat");
const RenameFiles = require("gulp-rename");
const jsMinify = require("gulp-uglify");
const minifyHtml = require("gulp-htmlclean");

// send welcome message
gulp.task("message", async () =>
    console.log("Welcome to gulp Ali ! :)"));
// send welcome message
// send txtfile to dist directory
gulp.task("sendtxtFile", async () =>
    gulp.src("src/*.txt")
        .pipe(gulp.dest("dist/"))
);
// send txtfile to dist directory
//send fonts to dist directory
gulp.task("sendFonts", async () =>
    gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
);
//send fonts to dist directory
// minify images
gulp.task("imgMinify", () => gulp.src("src/img/*.*")
    .pipe(imageMinify())
    .pipe(gulp.dest("dist/img"))
);
// minify images
// optimize js files
gulp.task("minifyJs",()=>
    gulp.src("src/js/*")
        .pipe(concatFiles("app.js"))
        .pipe(jsMinify())
        .pipe(RenameFiles("app.min.js"))
        .pipe(gulp.dest("dist/js/"))
)
// optimize js files
// optimize html files
gulp.task("optimizeHtml", () =>
    gulp.src("src/html/index.html")
        .pipe(minifyHtml())
        .pipe(RenameFiles("index.min.html"))
        .pipe(gulp.dest("dist/"))

)
// optimize html files
// watch
gulp.task("watch", () =>
    gulp.watch("src/",gulp.series('sendtxtFile')),
    gulp.watch("src/fonts/",gulp.series('sendFonts')),
    gulp.watch("src/img/",gulp.series('imgMinify')),
    gulp.watch("src/js/",gulp.series('minifyJs')),
    gulp.watch("src/html/*",gulp.series('optimizeHtml')),
)
// watch
// defaul task
gulp.task("default",gulp.parallel("message","sendtxtFile","sendFonts","imgMinify","minifyJs","optimizeHtml",))
// defaul task
