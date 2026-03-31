// filter implementado pra ver como funciona por dentro.
Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ps5", preco: 3499, fragil: true },
  { nome: "Xbox One", preco: 3099, fragil: true },
  { nome: "Nintendo DS", preco: 450, fragil: true },
];

const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
