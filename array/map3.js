//Criando uma função map2, como ela funciona por dentro.
Array.prototype.map2 = function (callback) {
  const newArray = []; // criar array vazio

  // percorrer o array original com this
  for (let i = 0; i < this.length; i++) {
    //dentro de callback passa elemento atual, indice e o array original
    //o new array push o resultado.
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços

// Converte o texto acima para objeto.
const paraObjeto = (json) => JSON.parse(json);

// recebe o preco do produto, armazena em apenas preco
const apenasPreco = (produto) => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);
