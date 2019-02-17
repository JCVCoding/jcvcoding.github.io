var gulp    = require("gulp"),
    watch   = require("gulp-watch"),
    browserSync = require("browser-sync").create();


//watch task
gulp.task("watch", function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });


    watch("./app/index.html", function(){
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", function(){
        browserSync.reload();
    });


});