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

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
