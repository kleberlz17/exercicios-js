const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.inc(); // 1 +++ 1
contadorA.inc(); // 2 +++ 1
console.log(contadorA.valor, contadorB.valor);
// vai return 3 e 3 (O b vai receber o cache do A)

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
// o C return 3 porém o D retorna 1,ele não recebe cache .
