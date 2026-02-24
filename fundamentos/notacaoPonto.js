console.log(Math.ceil(6.1)); // arredondamento pro teto

const obj1 = {};
obj1.nome = "Bola"; // criado dinamicamente.
// obj1["nome"] = "Bola2"; sobrescrevendo...
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = function () {
    // pode colocar function dentro de outra function
    console.log("Exec...");
  };
}

const obj2 = new Obj("Teclado");
const obj3 = new Obj("Mouse");
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec(); // poderia colocar obj2.exec também, não tem motivo especial pra ser obj3 aqui.
