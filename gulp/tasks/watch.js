var gulp    = require("gulp"),
    watch   = require("gulp-watch"),
    browserSync = require("browser-sync").create();
    sass = require("gulp-sass");

//watch task
gulp.task("watch", function(){

    browserSync.init({
        notify: false,
        server: true
    });


    watch("*.html", function(){
        browserSync.reload();
    });

    watch("./app/assets/scripts/*.js", function(){
        browserSync.reload();
    });

    watch("./app/assets/scripts/*.js", function(){
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.scss", function(){
        gulp.src("./app/assets/styles/*.scss")
        .pipe(sass({includePaths: ["./app/assets/styles/_*.scss"]}))
        .pipe(gulp.dest("./app/assets/styles"));
        browserSync.reload();
    });
});