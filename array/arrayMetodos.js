const pilotos = ["Vettel", "Alonso", "Raikkonen", "Hamilton"];
pilotos.pop(); // remove o ultimo elemento do array.
console.log(pilotos);

pilotos.push("Verstappen"); // adicionando .
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift("Senna"); // adiciona como primeiro.
console.log(pilotos);

// adicionando com splice
pilotos.splice(2, 0, "Hulkenberg", "Hadjar");
console.log(pilotos);

// remover com splice
pilotos.splice(3, 1); // removendo indice 3, 1 elemento.
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array a partir do indice 2.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // indice 1 até o 3. (para antes do 4)
console.log(algunsPilotos2);
