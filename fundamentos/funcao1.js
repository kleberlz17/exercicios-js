// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Nao vai ler alem do 2 e 10.
imprimirSoma(); // NaN

// Function com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3)); // Vai ignorar o = 1
console.log(soma(2)); // Vai considerar o = 1 na soma.
