for (let letra of "Javascript") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

//Vai percorrer os indices, não é essa a forma do exemplo.
for (let i in assuntosEcma) {
  console.log(i);
}

//Vai percorrer os valores, essa é a forma do exemplo.
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

// outro exemplo of
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl); // chave e valor
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  // letra of set
  console.log(letra);
}
