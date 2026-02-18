const escola = "Pri4rte";

console.log(escola.charAt(4)); // retorna o caractere no indice que eu passei.
console.log(escola.charCodeAt(3)); // mostra o unicode (65 é a letra A)
console.log(escola.indexOf("t")); // Mostra qual é o indice do t (5)

console.log(escola.substring(1)); // mostra o texto a partir do indice 1
console.log(escola.substring(0, 4)); // vai do 0 e para no 3.

console.log("Escola ".concat(escola).concat("!")); // adiciona Escola e ! ao texto.
console.log(escola.replace("4", "A")); // Substitui o 4 por A.

console.log("Lin, Shen, Len".split(",")); // vai gerar um array com os 3 elementos.
