const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser"); // SUBSTITUTO DO UGLIFY
const babel = require("gulp-babel");

function transformacaoJS(cb) {
  // cb = callback
  gulp
    .src("src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["@babel/preset-env"],
      }),
    )
    .pipe(terser()) // "enfeiamento" do codigo (cortando linhas inutilizadas)
    .on("error", (err) => console.log(err)) // se der erro.. exemplo básico
    .pipe(concat("codigo.min.js")) // concatenando o codigo
    .pipe(gulp.dest("build")); // destino dos codigos compilados

  return cb();
}

exports.default = series(transformacaoJS);
