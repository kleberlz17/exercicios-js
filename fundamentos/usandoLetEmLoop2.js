const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
// Já aqui, sendo let, sai exatamente o que a const funcs está pedindo.
funcs[2]();
funcs[8]();
