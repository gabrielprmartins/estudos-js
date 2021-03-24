import loading from './loading.js';
import erro from './error.js';
import activeFunctions from './active-functions';

export function initProdutos() {
  async function fetchProdutos(url) {
    try {
      loading(true);
      const produtosResponse = await fetch(url);
      if (!produtosResponse.ok) throw new Error(produtosResponse.statusText);
      const produtos = await produtosResponse.json();
      getProdutos(produtos);
    } catch (err) {
      erro(err);
    } finally {
      loading(false);
    }
  }

  function getProdutos(produtos) {
    activeFunctions();
    const produtosGrid = document.querySelector('[data-produtos]');
    if (produtosGrid) {
      produtos.forEach((produto) => {
        produtosGrid.innerHTML += `
          <div class="produto" data-produto-id="${produto.id}">
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-img">
            <div class="info-produto">
              <span class="preco-produto">R$ ${produto.preco}</span>
              <h2 class="nome-produto">${produto.nome}</h2>
            </div>
          </div>
        `;
      });
    }
  }

  return fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
}
