// mesmo exemplo da usandoCallback refatorado pra promises.
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

/*let nomes = [];
getTurma("A").then((alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});*/

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  .catch((e) => console.log(e.message));
// é ideal colocar catch sempre que trabalhar com promises com o then
// para  tratar eventuais erros/problemas.

// chamando o reject pra testar
getTurma("D").catch((e) => console.log(e.message));
