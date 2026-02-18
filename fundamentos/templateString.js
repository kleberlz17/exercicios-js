const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!!";

// Forma mais "moderna e rapida"
const template = `Olá, ${nome}!`; // pode fazer quebra de linha também.
console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`); // ele só vai somar o q está em ${}

const up = (texto) => texto.toUpperCase();

//  o texto "cuidado" é passado pra função acima e interpola com o Ei...
console.log(`Ei... ${up("cuidado")}!`);
