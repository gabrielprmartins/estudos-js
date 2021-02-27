export default function initMenuMobile() {
  const menuBotao = document.querySelector('[data-menu="botao"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  function openMenu() {
    menuBotao.classList.toggle('active');
    menuLista.classList.toggle('active');
  }

  menuBotao.addEventListener('click', openMenu);
}


