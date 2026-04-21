const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); // assim vai retornar undefined
console.log(tecnologias.get("react"));

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
  //valores e chaves
  console.log(ch, vl);
});

//conferindo se tem 123 e deletando.
console.log(chavesVariadas.has(123)); // true.
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // agora é false.
console.log(chavesVariadas.size);

// chave não aceita repetição, valor sim
// por isso sai a mesma chave com valores diferentes
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
chavesVariadas.set(456, "b");
console.log(chavesVariadas);
