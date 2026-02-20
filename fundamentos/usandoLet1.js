let numero = 1; // vai interagir com o console fora do bloco
{
  let numero = 2; // vai interagir com o console dentro do bloco
  console.log("dentro=", numero);
}
console.log("fora=", numero);
