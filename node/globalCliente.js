require("./global");

console.log(MinhaApp.saudacao());

//Não pode sobreescrever pois está freeze.
MinhaApp.nome = "Eita!!"; // Não vai sobreescrever...
console.log(MinhaApp.nome);
