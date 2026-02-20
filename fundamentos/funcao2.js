// Armazenando uma função em uma variavel(const)
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma função arrow (=>) em uma variavel(const)
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

// outra forma
const imprimir2 = (a) => console.log(a);
imprimir2("Legal!!");
