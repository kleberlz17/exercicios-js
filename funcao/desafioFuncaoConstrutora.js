function criarPessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new criarPessoa("Junior");
p1.falar();
