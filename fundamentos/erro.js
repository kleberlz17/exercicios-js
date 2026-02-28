function tratarErroELancar(erro) {
  throw new Error("Ocorreu um erro de processamento...");
  // outras formas de utilizar o throw...
  // throw 10
  // throw true
  // throw "mensagem"
  // throw {nome: erro.name, msg:erro.message, date: new Date}
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!"); // erro proposital "name"
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    // mesmo que de erro, vai chamar o finally.
    console.log("final");
  }
}

const obj = { nome: "Junior" };
imprimirNomeGritado(obj);
