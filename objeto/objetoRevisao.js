// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira"; // pode ser feito assim.
produto["marca do produto"] = "Generica"; // assim tambem.
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

// outro exemplo
const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "Rua ABBB",
      numero: 123,
    },
    condutores: [
      {
        nome: "Junior",
        idade: 19,
      },
      {
        nome: "Ana",
        idade: 42,
      },
    ],
    calcularValorSeguro: function () {
      // ...
    },
  },
};

carro.proprietario.endereco.numero = 1000; //Sobreescrevendo o numero.
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"; //Sobreescrevendo forma mais trabalhosa.
console.log(carro);

// acessando atributos de objeto e alterando...
delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
//console.log(carro.condutores.length);
