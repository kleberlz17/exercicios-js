const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function (e) {
  return e * 2; // multiplica * 2 cada elemento da array.
});

// o array original ainda existe
// foi criado um novo array.
console.log(resultado, nums);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;

//passe pra float, fixe em 2 valores após o . e troque de . pra ,
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
