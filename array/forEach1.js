const aprovados = ["Agata", "Cookie", "Mel", "Mafê"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`); //Pra cada nome em aprovados, indice + 1
});

// outro exemplo:
aprovados.forEach((nome) => console.log(nome));

// outro exemplo:
const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
