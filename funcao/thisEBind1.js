const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // aqui vai ter conflito entre paradigmas: funcional e 00
//e vai dar undefined

const falarDePessoa = pessoa.falar.bind(pessoa); // com o bind não dá undefined
falarDePessoa();
