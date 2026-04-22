function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Falando depois de 3 segundos!!!")
  .then((frase) => frase.concat("WOWOWOW"))
  .then((outraFrase) => console.log(outraFrase));
