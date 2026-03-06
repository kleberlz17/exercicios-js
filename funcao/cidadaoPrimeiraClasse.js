// pode criar de forma literal
function fun1() {}

// pode armazenar em uma variável
const fun2 = function () {};

// pode armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

// pode armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// passar função como parametro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    // retorna um novo parametro em uma nova function
    console.log(a + b + c);
  };
}

soma(2, 3)(7);

// exemplo de outra forma de fazer
const cincoMais = soma(2, 3);
cincoMais(7);
