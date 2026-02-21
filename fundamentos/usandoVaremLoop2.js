const funcs = [];

//toda vez que somar +1 no I no loop, o function push o valor pro const
//em tese, se fosse let sairia o valor de cada no funcs, mas como
//var nao tem escopo de bloco/função, entao ele só sai o "false" 10 que sobra.
for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
// var nao tem escopo de bloco/função, entao vai sair 10 e 10
// pq quando o loop termina, o valor que "sobra" pra sair do bloco é 10
// já que o loop só quer de 0 a 9.
funcs[2]();
funcs[8]();
