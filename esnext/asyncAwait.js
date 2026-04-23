const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  // resolve a promise é atendida, reject a promise é rejeitada
  return new Promise((resolve, reject) => {
    http.get(url, (resposta) => {
      let resultado = " ";

      resposta.on("data", (dados) => {
        resultado += dados;
      });

      resposta.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          // e = erro
          reject(e);
        }
      });
    });
  });
};

//Recurso do ES8
// Objetivo de simplificar o uso de promises
let obterAlunos = async () => {
  const ta = await getTurma("A"); // ta = turma a
  const tb = await getTurma("B"); // tb = turma b
  const tc = await getTurma("C"); // tc = turma c
  return [].concat(ta, tb, tc);
}; // retorna um objeto AsyncFunction

obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes));
