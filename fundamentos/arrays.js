const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // indiice 0 e indice 3
console.log(valores[4]); // indefinido, nao existe indice 4.

valores[4] = 10; // adicionar um quarto indice.
console.log(valores);
console.log(valores.length); // qts elementos tem no array.

// mesmo nao sendo uma boa pratica, pode misturar tipos num array, ex:
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

console.log(valores.pop()); // Retira o ultimo valor do array e retorna ele na saida.

delete valores[0]; // deleta o indice 0 do array.
console.log(valores);

console.log(typeof valores); // tipo do valores.(object)
