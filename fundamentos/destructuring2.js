const [a] = [10]; // array de 1 item só.
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // array com valores undefineds..
console.log(n1, n3, n5, n6);

//exemplo do que pode ser feito mas que não é tão valido ser feito.
const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota);
