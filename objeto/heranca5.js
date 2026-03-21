//Mostrando os tipos + uma vez.
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Metodo de reversão
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Testando reversão".reverse());

//Metodo de retorno first
Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(["a", "b", "c"].first());
