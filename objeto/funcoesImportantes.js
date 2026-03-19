const pessoa = {
  nome: "Rebecca",
  idade: 50,
  peso: 65,
};

console.log(Object.keys(pessoa)); // nome, idade e peso
console.log(Object.values(pessoa)); // rebecca, 50, 65
console.log(Object.entries(pessoa)); // gera um array.

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, //Listavel? sim.
  writable: false, //modificavel? não.
  value: "22/03/1970",
});

pessoa.dataNascimento = "23/03/1965"; // Não vai modificar. Só se mudar pra true.
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); // Concatena vários objetos em um só.
//Pode ser sobreescrito.

Object.freeze(obj);
obj.c = 1234; //Não vai alterar, está congelado.
console.log(obj);
