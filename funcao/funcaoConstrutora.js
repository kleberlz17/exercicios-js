function Carro(velocidadeMaxima = 200, delta = 5) {
  // artibuto privado
  let velocidadeAtual = 0;

  // metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20); // velocidade inicial e delta sobreescritos pra ferrari.
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
