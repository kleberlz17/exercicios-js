// servidor web configuração
const porta = 3003;

//importando com require os modules necessários
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./bancoDeDados");

//os dados enviados pelo postman são pelo formato urlencoded
//vai ocorrer um parse(passar) que vai transformar em objeto para q possa ser acessado
//mais tranquilamente sem erros.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  // requisiçao, resposta, next (next não está sendo utilizado, é so pra exemplo)
  res.send(bancoDeDados.getProdutos()); // Vai converter para JSON
});

//Outra Forma da requisição get que deve ser digitada em base do ID.
app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

//Requisição post
app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // só pra retornar a resposta do que foi Post em JSON
});

//Requisição de put(atualizaçao)
app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto); // JSON
});

//Escutando na porta...
app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`);
});
