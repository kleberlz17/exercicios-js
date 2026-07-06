const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

//FUNCOES DEPS SERAO EXPORTADAS DESSE ARQUIVO AQUI!!
function depsCSS() {
  return gulp.src("node_modules/font-awesome/css/font-awesome.css")
  .pipe(uglifycss({"uglyComments" : false }))
  .pipe(concat("deps.min.css"))
  .pipe(gulp.dest("build/assets/css")) // essa pasta so vai ser criada quando executar gulp
}

function depsFonts(cb) {
  return gulp.src("node_modules/font-awesome/fonts/*.*") // *.* pegando todas as fontes dentro da pasta
    .pipe(gulp.dest("build/assets/fonts"))
}

module.exports = {
  depsCSS,
  depsFonts,
};
