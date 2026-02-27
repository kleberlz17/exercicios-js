let num1 = 1;
let num2 = 2;

num1++; // agora vale 2
console.log(num1);
--num1; // volta a valer 1.
console.log(num1);

//Aqui da true pq num1 fica 2 antes de comparar, porém o num2 só fica 1
//depois da comparação ja ter acontecido.
console.log(++num1 === num2--);
