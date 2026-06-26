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
//startando servidor..
app.listen(8080, () => console.log("Executando..."));
