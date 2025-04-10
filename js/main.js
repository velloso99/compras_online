const vitrine = document.getElementById("vitrine");

const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

produtos.forEach(produto => {
  const card = document.createElement("div");
  card.classList.add("produto");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p>${produto.preco}</p>
    <a href="${produto.link}" target="_blank">Comprar</a>
  `;

  vitrine.appendChild(card);
});