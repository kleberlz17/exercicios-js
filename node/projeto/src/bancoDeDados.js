const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  },
};

const produtos = {};

//Se não tiver ID, adiciona e retorna com um ID.
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function getProduto(id) {
  return produtos[id] || {}; // se não encontrar produto pelo id, retorna vazio.
}

//Retorna valor de todos os produtos
function getProdutos() {
  return Object.values(produtos);
}

//Excluir o produto
function excluirProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

//Disponiveis  e visiveis pra fora do arquivo pra exports
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto };
