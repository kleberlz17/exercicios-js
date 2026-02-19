// zerar uma referencia = null / undefined = deixar que o javascript decida.

let valor; // não atribuida nada a variavel
console.log(valor);

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 7.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco); // booleano pra ver se preco tem algo atribuido
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco); // boolean vai dar falso tambem, o preço é nulo.
console.log(produto);
