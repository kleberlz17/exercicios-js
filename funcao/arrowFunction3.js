// exemplo 1
let comparaComThis = function (param) {
  console.log(this === param); // estritamente igual (===)
};

comparaComThis(global);

// exemplo 2
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

// exemplo 3
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
