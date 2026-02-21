// Aqui mesmo fora do bloco, o 'i' é visivel também, porém ele retorna o false do laço(10, que sobra)

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("i =", i); // quando sai do laço (for) o numero que sai aqui é 10
