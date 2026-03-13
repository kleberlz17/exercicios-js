// Função factory 2 exemplo.
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("Playstation 5", 3499.49));
console.log(criarProduto("Xbox Series S", 2699.49));
