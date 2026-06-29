//NECESSÁRIO PARA O FUNCIONAMENTO DO AJAX
//AS REQUISIÇÕES UTILIZADAS EM AXIOS, FETCH ETC ESTÃO TODAS AQUI
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//todos arquivos estaticos(html, js, fontes, etc) serão utilizados
app.use(express.static("."));

//recebimento de submit de formulario o transformando em objeto
app.use(bodyParser.urlencoded({ extended: true }));

//recebimento de json o transformando em objeto
app.use(bodyParser.json());

//serve pra interpretar o formulário que vem o arquivo do upload
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    //requisiçao, resposta e erro
    if (err) {
      return res.end("Ocorreu um erro");
    }

    res.end("Concluído com sucesso.");
  });
});

app.post("/formulario", (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  });
});

app.get("/parOuImpar", (req, res) => {
  const par = parseInt(req.query.numero) % 2 === 0; //numero dividido por 2  com resto 0 é par
  //caso contrário é impar
  res.send({
    resultado: par ? "par" : "impar",
  });
});

//startando servidor..
app.listen(8080, () => console.log("Executando..."));
