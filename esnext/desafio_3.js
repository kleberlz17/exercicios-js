// o 3 do arquivo é só pra não me perder nas aulas.

const fs = require("fs");
const path = require("path");

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });
  });
}

const caminho = path.join(__dirname, "dados.txt");

lerArquivo(caminho)
  .then((conteudo) => conteudo.split(/\r?\n/)) // se não colocar assim, vai sair 1 embaixo do outro
  .then((linhas) => linhas.join(", "))
  .then((conteudo) => `O valor final é: ${conteudo}`)
  .then(console.log);
