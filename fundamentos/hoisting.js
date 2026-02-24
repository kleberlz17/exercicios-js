// É so um exemplo de hoisting (içamento), isso não deve ser feito.

console.log("a =", a); // vai sair como undefined
var a = 2;
console.log("a =", a); //içamento(moveu) pro log abaixo.

// outro ex /nesse caso vai dar erro, não é possivel fazer hosting com let.
console.log("b =", b);
let b = 2;
console.log("b =", b);
