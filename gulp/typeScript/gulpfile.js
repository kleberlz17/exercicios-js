//CONVERTENDO DE typeScript para javaScript

const { series } = require("gulp");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json"); // criar projeto referente a config do tsconfig.json

function transformacaoTS() {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest("build")); // o arquivo será criado na pasta build que será criada por aqui também
}

exports.default = series(transformacaoTS);
