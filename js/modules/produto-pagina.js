import FetchPage from './fetch-page';
import { initProdutos } from './produtos.js';

export default function permalinkProducts(e, products) {
  const produtosGrid = document.querySelector('[data-produtos]');
  produtosGrid.classList.remove('get-in'); // animação
  const tituloPrincipal = document.querySelector('.titulo-principal');

  const getOnlyProduct = () => {
    const produtoId = document.querySelectorAll('[data-produto-id]');
    products.forEach((produto, i) => {
      if (e.currentTarget === produtoId[i]) {
        document.body.scrollIntoView();
        if (tituloPrincipal) tituloPrincipal.remove();
        produtosGrid.innerHTML = `
          <div class="produto-especificacoes">
            <button class="voltar-produto" data-produto="voltar"><div>➜</div> Voltar</button>
            <img src="${produto.fotos[0].src}" alt="${produto.fotos[0].titulo}" class="produto-espec-img">
            <div class="especificacoes">
              <h2 class="nome-produto">${produto.nome}</h2>
              <span class="preco-produto">R$ ${produto.preco}</span>
              <p class="paragrafo">${produto.descricao}</p>
            </div>
          </div>
        `;
        document.title += ` | ${produto.nome}`;
      }
    });
  };

  const fetchPageProducts = () => {
    const linkProdutos = document.querySelector('[data-menu="lista"] li:first-child a').href;
    const fetchPage = new FetchPage(linkProdutos, initProdutos, '.center-column');
    return fetchPage.init();
  };

  const handleBackButton = () => {
    const btnVoltarProdutos = document.querySelector('[data-produto="voltar"]');
    if (btnVoltarProdutos) {
      btnVoltarProdutos.addEventListener('click', fetchPageProducts);
    }
  };

  const init = () => {
    if (produtosGrid) {
      getOnlyProduct();
      handleBackButton();
    }
  };

  init();
}
