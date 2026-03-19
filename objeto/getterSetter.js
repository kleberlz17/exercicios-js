const sequencia = {
  _valor: 1, // convenção (o _ é pra indicar que é privada e deve ser acessada com get/set)
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    this._valor = valor;
  },
};

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);

// get o valor inicial ex(1 ou 1000) e depois set ele com o acrescimo++(2 ou 1001)
