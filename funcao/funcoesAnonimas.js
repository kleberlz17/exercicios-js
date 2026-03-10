const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

//varios exemplos de imprimir o resultado.
imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y; // sobreescreveu o retorno.
});
imprimirResultado(3, 4, (x, y) => x * y); // spbreescreveu o retorno

// outro tipo de exemplo de como codificar function
const pessoa = {
  falar: function () {
    console.log("Opa");
  },
};

pessoa.falar();
