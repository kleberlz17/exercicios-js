// não aceita repetição/ não é indexada(nao consegue utilizar indice)
const times = new Set();
times.add("Fluminense");
times.add("Arsenal").add("Manchester City").add("Liverpool");
times.add("Botafogo");
times.add("Fluminense");

console.log(times);
console.log(times.size);
console.log(times.has("fluminense"));
console.log(times.has("Fluminense"));
times.delete("Arsenal");
console.log(times.has("Arsenal"));

const nomes = ["Lester", "Jasper", "Nester", "Lester"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
