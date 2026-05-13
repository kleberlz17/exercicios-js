const colors = {
  p: "#388e3c",
  div: "#1565c0",
  span: "#e53935",
  section: "#f67809",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60",
  nav: "#64dd17",
  main: "#00acc1",
  footer: "#304ffe",
  form: "#9f6581",
  body: "#25b6da",
  padrao: "#616161",
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
    // tag existe? se existir ele retorna com as cores definidas, se nao, retorna na cor padrao(616161)
  },
};

document.querySelectorAll(".tag").forEach((elemento) => {
  //box é o elemento, só escolhi esse nome
  const tagName = elemento.tagName.toLowerCase();

  elemento.style.borderColor = colors.get(tagName);

  //SE o nolabel nao estiver presente o codigo adiciona 1 label dentro do elemento
  if (!elemento.classList.contains("nolabel")) {
    const label = document.createElement("label");
    label.style.backgroundColor = colors.get(tagName);
    label.innerHTML = tagName;
    elemento.insertBefore(label, elemento.childNodes[0]);
  }
});
