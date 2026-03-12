const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec(); //Ela vai executar a const valor "Global" e não a "Local"
