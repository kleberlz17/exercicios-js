// Object.preventExtensions (Impede que o objeto seja extendido)
// por ex: Não da pra adicionar novos parametros, porem pode alterar
// os que ja existem.
const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promocao",
});
console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha"; // tentando alterar
produto.descricao = "Borracha escolar branca";
delete produto.tag;
console.log(produto);

// Object.seal (Consegue modificar os que existem, não consegue adicionar e nem excluir)
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
// Não da pra alterar, deletar, adicionar.
