const gulp = require("gulp");
const { series, parallel } = require("gulp");

const antes1 = (cb) => {
  console.log("Tarefa Antes 1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa Antes 2!");
  return cb();
};

function copiar(cb) {
  // cb = callback
  //gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
  gulp
    .src("pastaA/**/*.txt") // copia tudo dentro da pastaA que seja .txt
    // pipe serve TAMBÉM pra aplicar transformações em arquivos que serão copiados
    .pipe(gulp.dest("pastaB")); // aqui ele só está copiando da pastaA e criando a pastaB para armazenar
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa Fim!");
  return cb();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
