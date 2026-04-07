// Uma factory retorna um novo objeto
//Não vai haver cache aqui, ou seja, os numeros vão resetar.
module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++;
    },
  };
};
