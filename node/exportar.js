//Somente relembrando algumas coisas...
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

exports = {
  nome: "Teste",
};

console.log(module.exports);

//Unica forma válida de atribuir outro objeto para ser exportado é essa:
//As de cima nao irão substituir o objeto que já foi criado no início.
module.exports = { publico: true };
