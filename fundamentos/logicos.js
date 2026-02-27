function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // ou
  const comprarTv50 = trabalho1 && trabalho2; // e
  const comprarTv32 = trabalho1 != trabalho2; // se 1 for verdadeiro e 1 for falso é possivel comprar a TV
  const manterSaudavel = !comprarSorvete; // não comprar sorvete

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
// todos vão comparar com as variaveis acima.
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
