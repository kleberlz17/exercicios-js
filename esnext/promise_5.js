//Exemplos parecidos aos anteriores, pra reafirmar

function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("Testando...", 0.5) // 0.5 = 50% - as vezes da retorno e as vezes da erro.
  .then((v) => console.log(`Valor: ${v}`))

  //DEPOIS DO catch NENHUM valor será atribuido. ele DEVE ser a ultima linha.
  .catch((err) => console.log(`Erro: ${err}`)); // tratamento de erro com catch
