// {} representa um objeto.
// tipagem fraca permite que adicione informações dinamicamente.
const prod1 = {};
prod1.nome = "Playstation 5";
prod1.preco = 3000.0;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(prod1);

//Pode fazer forma padrão também, todas as informações de uma vez.
const prod2 = { nome: "Xbox One", preco: 2500.0 };

//Transformando em Json(pra transferência entre sistemas)
('{"nome": "Xbox One", "preco": 2500.0}');
console.log(prod2);
