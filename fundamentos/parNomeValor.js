// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaaaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Junior",
  idade: 30,
  peso: 77,
  endereco: {
    logradouro: "Rua TownVille",
    numero: 123,
  },
};

console.log(saudacao); // vai sair o primeiro const saudacao
console.log(exec()); // vai sair o segundo const saudacao dentro da funcao
console.log(cliente); // vai sair o cliente
