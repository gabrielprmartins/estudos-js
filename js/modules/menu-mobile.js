export default class MenuMobile {
  constructor(menuBotao, menuLista) {
    this.menuBotao = document.querySelector(menuBotao);
    this.menuLista = document.querySelector(menuLista);
    this.html = document.documentElement;

    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  closeMenu() {
    this.menuBotao.classList.remove('active');
    this.menuLista.classList.remove('active');
    setTimeout(() => this.html.removeEventListener('click', this.closeMenu));
  }

  openMenu() {
    this.menuBotao.classList.add('active');
    this.menuLista.classList.add('active');
    setTimeout(() => this.html.addEventListener('click', this.closeMenu));
  }

  init() {
    if (this.menuBotao && this.menuLista) {
      this.menuBotao.addEventListener('click', this.openMenu);
    }
    return this;
  }
}
