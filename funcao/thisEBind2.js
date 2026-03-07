function Pessoa() {
  this.idade = 0;

  const self = this; // pode utilizar uma constante self recebendo o this pra que o this idade seja recebido pela function abaixo.
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    }, //.bind(this), // com o bind ele consegue encontrar o this de pessoa.
    1000, // 0 até 1000 em idade.
  );
}

new Pessoa();
