export default function initMenuMobile() {
  const menuBotao = document.querySelector('[data-menu="botao"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const html = document.documentElement;

  function closeMenu() {
    menuBotao.classList.remove('active');
    menuLista.classList.remove('active');
    setTimeout(() => html.removeEventListener('click', closeMenu));
  }

  function openMenu() {
    menuBotao.classList.add('active');
    menuLista.classList.add('active');
    setTimeout(() => html.addEventListener('click', closeMenu));
  }

  menuBotao.addEventListener('click', openMenu);
}
