// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = "0"; //<<< NÃO É RECOMENDADO FAZER ISSO!!!!

const avo = { atributo1: "A" };
const pai = { __proto__: avo, atributo2: "B", atributo3: "3" }; //Só chegaria no atributo 3 aqui se o filho não tivesse atributo3.
const filho = { __proto__: pai, atributo3: "C" };
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);

// outro exemplo..
const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //Shadowing, vai sombrear o valor max do carro.
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro); // relação entre ferrari e carro estabelecida(herança)
// Ferrari terá carro como prototype.
Object.setPrototypeOf(volvo, carro); // mesma coisa aqui.

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

//Lembrando que a velocidade maxima do carro  foi sombreada pela ferrari, o valor max aumenta aqui.
ferrari.aceleraMais(300);
console.log(ferrari.status());
