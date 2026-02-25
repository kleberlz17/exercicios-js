const a = 7; // atribuição
let b = 3; // atribuição

// na sequencia abaixo, o b é sempre o que o ultimo foi, ex: aqui o B é 10.
b += a; // b = b + a
console.log(b);

b -= 4; // b = b - 4 // aqui é 10 - 4 = 6
console.log(b);

b *= 2; // b = b * 2 // aqui é 6 * 2 = 12
console.log(b);

b /= 2; // b = b / 2 // aqui é 12 / 2 = 6
console.log(b);

b %= 2; // b = b % 2 // se o b for par vai sair 0, se for impar sai 1 ( sai o resto que sobra)
console.log(b);
