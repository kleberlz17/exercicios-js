function rand({ min = 0, max = 1000 }) {
  //rand retorna um numero aleatorio
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 }; // numero randomico entre 40 a 50.
console.log(rand(obj));
console.log(rand({ min: 955 })); // 955 pra cima.
console.log(rand({})); // entre 0 e 1000.
