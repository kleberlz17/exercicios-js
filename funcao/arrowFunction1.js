let dobro = function (a) {
  return 2 * a;
};

// reescrevendo com arrow..
dobro = (a) => {
  return 2 * a;
};

// exemplo menor ainda.
dobro = (a) => 2 * a; // return implícito
console.log(dobro(Math.PI));

//  Outro tipo de exemplo.
let ola = function () {
  return "Olá";
};

// COM arrow.
ola = () => "Olá"; // essa é mais usada.
ola = (_) => "Olá"; // possui um param e é a forma menos usada.
console.log(ola());
