const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`); // se não tiver o +1 vai sair 0,1,2
}

fabricantes.forEach(imprimir);

//exemplo de saida com arrow
fabricantes.forEach((fabricantes) => console.log(fabricantes));
