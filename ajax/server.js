//NECESSÁRIO PARA O FUNCIONAMENTO DO AJAX
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//todos arquivos estaticos(html, js, fontes, etc) serão utilizados
app.use(express.static("."));

//recebimento de submit de formulario o transformando em objeto
app.use(bodyParser.urlencoded({ extended: true }));

//recebimento de json o transformando em objeto
app.use(bodyParser.json());

//quando vier requisição pelo /teste...
app.get("/teste", (req, res) => res.send("Ok"));

//startando servidor..
app.listen(8080, () => console.log("Executando..."));
