//Exemplos parecidos aos anteriores, pra reafirmar
//calback dentro de callback

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise...");
      resolve();
    }, tempo);
  });
}

// 2 em 2 segundos, se colocar ex 3000, vai ser de 3 em 3.
esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
