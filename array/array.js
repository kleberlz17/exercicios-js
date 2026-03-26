let aprovados = new Array("Aline", "Jonas", "Beto");
console.log(aprovados);

//Pode sobreescrever pq é let e não const.
aprovados = ["Bia", "Carlos", "Ana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3] = "Robert";
aprovados.push("Felicia"); // adicionando de outra forma.
console.log(aprovados.length); // quantos existem dentro da array.

aprovados[9] = "Rafael";
console.log(aprovados.length); //10 inidices mesmo que uma parte seja undefined.
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // altera a ordem.
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Arana", "Bale", "Gareth"];
aprovados.splice(1, 2); // a partir do indice 1, deleta 2.
console.log(aprovados);
