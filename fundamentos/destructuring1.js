// novo recurso do ES2015

const pessoa = {
  nome: "Ana",
  idade: 40,
  endereco: {
    logradouro: "Rua Town",
    numero: 1000,
  },
};
// destructuring ... com atributos undefineds também..
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
