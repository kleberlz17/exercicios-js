let contador = 1;
while (contador <= 10) {
  console.log(`contador = ${contador}`);
  contador++;
}

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
// percorre o array até o tamanho total dele com length, contando com o i++
for (let i = 0; i < notas.length; i++) {
  // começando do indice (i) 0!!
  console.log(`nota = ${notas[i]}`);
}
