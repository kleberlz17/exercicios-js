const { series, parallel } = require("gulp");
const gulp = require("gulp");

const { appHTML, appCSS, appJS, appIMG } = require("./gulpTasks/app.js");
const { depsCSS, depsFonts } = require("./gulpTasks/deps.js");
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor.js");

//COMO SERÁ O WORKFLOW DA APLICAÇÃO = app + deps (paralelamente) E > servidor
module.exports.default = series(
  parallel(series(appHTML, appCSS, appJS, appIMG), series(depsCSS, depsFonts)),
  servidor,
  monitorarArquivos,
);
