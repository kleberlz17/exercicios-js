const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

//AXIOS é um client HTTP que faz requisições para obter informações
//de algo que está remoto.
const axios = require("axios");

//Filtros para buscar a chinesa com o menor salário no json.
const chineses = (f) => f.pais === "China";
const mulheres = (f) => f.genero === "F";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  console.log(funcionarios);

  // Executando os filtros.
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario);

  console.log(func);
});
