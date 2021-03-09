import { loading } from './loading.js';
import { erro } from './error.js';
import { activeFunctions } from '../script.js';

const tituloProdutos = document.querySelector('.produto-titulo');

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
    document.title = 'Produtos';
    const produtosGrid = document.querySelector('[data-produtos]');
    const tituloPrincipal = document.querySelector('.titulo-principal');
    if(!tituloPrincipal) document.querySelector('.grid .center-column').insertBefore(tituloProdutos, produtosGrid);
    activeFunctions();

    if(produtosGrid) {
      produtos.forEach(produto => {
        produtosGrid.innerHTML += `
          <div class="produto" data-produto-id="${produto.id}">
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-img">
            <div class="info-produto">
              <span class="preco-produto">R$ ${produto.preco}</span>
              <h2 class="nome-produto">${produto.nome}</h2>
            </div>
          </div>
        `;
      })

      const produtosDiv = document.querySelectorAll('.produto');
      if(produtosDiv) produtosDiv.forEach(p => p.addEventListener('click', (e) => permalinkProducts(e, produtos)));
    }
  }

  function permalinkProducts(e, produtos) {
    const produtosGrid = document.querySelector('[data-produtos]');
    const tituloPrincipal = document.querySelector('.titulo-principal');
    const produtoId = document.querySelectorAll('[data-produto-id]');

    produtos.forEach((produto, i) => {
      if(e.currentTarget === produtoId[i]) {
        if(tituloPrincipal) tituloPrincipal.remove();
        document.body.scrollIntoView();
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

        if(btnVoltarProdutos && produtoEspecificacoes) {
          btnVoltarProdutos.addEventListener('click', () => {
            produtoEspecificacoes.remove();
            getProdutos(produtos);
          })
        }
        // if(document.title.includes(produto.nome)) {
        //   window.addEventListener('popstate', () => { 
        //     produtoEspecificacoes.remove();
        //     getProdutos(produtos);
        //   });
        // } 
      }
    })
  }
  
  fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
}