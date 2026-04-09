// fs é um modulo que ja vem no node pra leitura de arquivos.
const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8"); // utf-8 é a forma que o arquivo.json foi escrito.
console.log(conteudo);

// assincrono..
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// leitura de um arquivo
const config = require("./arquivo.json");
console.log(config.db);

// leitura de diretorio atual.
fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
