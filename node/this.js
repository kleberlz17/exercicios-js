// Mais sobre this...

//Fora o this não é global.
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
  // Dentro de uma função, o this é global.
  console.log("Dentro de uma função...");
  console.log(this === exports);
  console.log(this === module.exports);
  console.log(this === global);
}

logThis();
