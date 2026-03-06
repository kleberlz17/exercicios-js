function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 15, 17, 22, 44)); // vai ignorar os parametros a mais.
console.log(area(5, 5)); // passa de 20 de area.
