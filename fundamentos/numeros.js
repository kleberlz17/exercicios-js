const peso1 = 1.0; //1.0)(2.0, 3.0 etc..) sai como inteiro, acima deixa de ser.
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

//flutuantes.
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // resultado vai sair so com 2 numeros após o .
console.log(media.toString()); // sai o original(). com (2) sai em binário.
console.log(typeof media);
console.log(typeof Number); // vai sair function, nao number.
