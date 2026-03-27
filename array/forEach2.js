//Criando a function do forEach2 (não oficial)
//implementando como ele funciona por de baixo dos panos.
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Agata", "Cookie", "Mel", "Mafê"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`); //Pra cada nome em aprovados, indice + 1
});
