function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000); //  << quantas vezes ele repete essa função.
}

new Pessoa(); // só vai executar com o new Pessoa.
