// Retorno filtrado exemplo

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "Ps5", preco: 3499, fragil: true },
  { nome: "Xbox One", preco: 3099, fragil: true },
  { nome: "Nintendo DS", preco: 450, fragil: true },
];

console.log(
  produtos.filter(function (p) {
    // p representa cada elemento do produtos
    return true;
  }),
);

// arrow
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
