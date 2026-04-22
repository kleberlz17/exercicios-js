// sem promise... (vai ser refatorado em outro arquivo pra promise pq é mais utilizado)
const http = require("http");

//PEGANDO OS DADOS DO URL
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  http.get(url, (resposta) => {
    let resultado = " ";

    resposta.on("data", (dados) => {
      resultado += dados;
    });

    //CONVERTENDO JSON
    resposta.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

// Agora  os dados dos alunos ja podem ser buscados.
// callback dentro de callback não é bem visto
// é somente um exemplo.
let nomes = [];
getTurma("A", (alunos) => {
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});
