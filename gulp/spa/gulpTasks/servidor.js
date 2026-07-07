const gulp = require("gulp");
const webserver = require("gulp-webserver")
const watch = require("gulp-watch")

// EXPORTAÇOES DESSE ARQUIVO AQUI TAMBÉM!
//AQUI É PRO SERVIDOR RODAR
function servidor(cb) {
  return gulp.src("build")
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }))
}

function monitorarArquivos(cb) { 
  //alterações serão feitas imediatamente
  watch("src/**/*.html", () => gulp.series("appHTML")())
  watch("src/**/*.scss", () => gulp.series("appCSS")())
  watch("src/**/*.js", () => gulp.series("appJS")())
  watch("src/assets/imgs/**/*.*", () => gulp.series("appIMG")())

  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
