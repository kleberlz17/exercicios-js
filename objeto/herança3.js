const pai = { nome: "Pedro", corCabelo: "preto" };

const filha1 = Object.create(pai);
filha1.nome = "Amanda";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Ana", writable: false, enumerable: true }, // false a key não aparece.
});

console.log(filha2.nome);
filha2.nome = "Jasmine"; // Não vai sobreescrever.
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

//filha2 tem nome, mas não tem corCabelo próprio, só por herança.
for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}
