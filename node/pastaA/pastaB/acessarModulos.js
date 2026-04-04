// cada .. passa por uma pasta para chegar até onde se quer.
const moduloA = require("../../moduloA");
console.log(moduloA.ola);

// outro exemplo
const c = require("./pastaC");
console.log(c.ola2);

// outro exemplo (esse vai ficar executando enquanto não parar.)
const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia!!");
    res.end();
  })
  .listen(8080);
