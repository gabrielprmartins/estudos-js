import { loading } from './loading.js';
import { erro } from './error.js';

export function initProdutos() {
  async function fetchProdutos(url) {
    try {
      loading(true);
      const produtosResponse = await fetch(url);
      if(!produtosResponse.ok) throw new Error(produtosResponse.statusText);
      const produtos = await produtosResponse.json();
      getProdutos(produtos);
    } catch(err) {
      erro(err);
    } finally {
      loading(false);
    }
  }
  
  function getProdutos(produtos) {
    const produtosDom = document.querySelector('[data-produtos]');
    
    if(produtosDom) {
      produtos.forEach(produto => {
        produtosDom.innerHTML += `
          <div class="produto">
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-img">
            <div class="info-produto">
              <h2 class="nome-produto">${produto.nome}</h2>
              <span class="preco-produto">${produto.preco}</span>
            </div>
          </div>
        `;
      })
    }
  }
  
  fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
}

