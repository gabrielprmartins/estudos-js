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
    const produtosGrid = document.querySelector('[data-produtos]');
    
    if(produtosGrid) {
      produtos.forEach(produto => {
        produtosGrid.innerHTML += `
          <div class="produto">
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-img">
            <div class="info-produto">
              <span class="preco-produto">R$ ${produto.preco}</span>
              <h2 class="nome-produto">${produto.nome}</h2>
            </div>
          </div>
        `;
      })

      const produtosDiv = document.querySelectorAll('.produto');
      if(produtosDiv) produtosDiv.forEach(p => p.addEventListener('click', (e) => hiperlinkProducts(e, produtos)));
    }
  }

  function hiperlinkProducts(e, produtos) {
    const produtosGrid = document.querySelector('[data-produtos]');
    
    produtos.forEach(produto => {
      document.body.scrollIntoView();
      if(produto.fotos[0].src === e.target.src) {
        // window.history.pushState(null, null, 'produto/'+ produto.nome);
        produtosGrid.innerHTML = `
          <div class="produto-especificacoes">
           <button class="voltar-produto" data-produto="voltar">◄ Voltar</button>
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-img">
            <div class="especificacoes">
              <h2 class="nome-produto">${produto.nome}</h2>
              <span class="preco-produto">R$ ${produto.preco}</span>
              <p class="paragrafo">${produto.descricao}</p>
            </div>
          </div>
        `;
        document.title = document.querySelector('title').innerText + ' | ' + produto.nome;
        const btnVoltarProdutos = document.querySelector('[data-produto="voltar"]');
        const produtoEspecificacoes = document.querySelector('.produto-especificacoes');

        if(btnVoltarProdutos && produtoEspecificacoes) btnVoltarProdutos.addEventListener('click', () => {
          produtoEspecificacoes.remove();
          getProdutos(produtos);
        })
        if(document.title.includes(produto.nome)) {
          window.addEventListener('popstate', () => { 
            getProdutos(produtos);
            produtoEspecificacoes.remove();
          });
        } 
      }
    })
  }
  
  fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
}

