const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
  return (
    gulp
      .src("src/sass/index.scss")
      .pipe(sass().on("error", sass.logError)) // caso de erro no sass
      .pipe(uglifycss({ uglyComments: true }))

      //Criando o caminho que é href la no index.html POR AQUI
      .pipe(concat("estilo.min.css"))
      .pipe(gulp.dest("build/css"))
  );
}

function copiarHTML() {
  // copiando o index.html que esta fora da pasta pra dentro de build
  return gulp.src("src/index.html").pipe(gulp.dest("build"));
}

exports.default = series(transformacaoCSS, copiarHTML);
