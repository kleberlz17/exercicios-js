const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.15,
};

// writeFile vai criar o arquivo da forma que for definido, utilizando
// da const produto
fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    console.log(err || "Arquivo salvo!");
  },
);
