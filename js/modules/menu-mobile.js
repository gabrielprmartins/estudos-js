export default function initMenuMobile() {
  const menuBotao = document.querySelector('[data-menu="botao"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuBotao.classList.toggle('active');
    menuLista.classList.toggle('active');
  }

  eventos.forEach(userEvent => menuBotao.addEventListener(userEvent, openMenu));
}


