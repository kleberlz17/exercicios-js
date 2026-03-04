function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
//exemplo pouco usado, mas é bom saber.
let opcao; //nesse exemplo a variavel nao precisa ter valor inicial atribuido.

do {
  // faça ..
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1); // enquanto..

console.log("Até a proxima!!");
