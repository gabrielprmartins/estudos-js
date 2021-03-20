export default class TabNavigation {
  constructor(tabControls, tabContent) {
    this.tabControls = document.querySelectorAll(tabControls);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = 'ativo';
  }

  removeClassActive() {
    this.tabContent.forEach((item) => item.classList.remove(this.activeClass));
    this.tabControls.forEach((item) => item.classList.remove(this.activeClass));
  }

  addClassActive(index) {
    this.removeClassActive();
    this.tabContent[index].classList.add(this.activeClass);
    this.tabControls[index].classList.add(this.activeClass);
  }

  addTabEvent() {
    this.tabControls.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        this.addClassActive(index);
      });
    });
  }

  init() {
    if (this.tabControls[0] && this.tabContent[0]) {
      this.addClassActive(0);
      this.addTabEvent();
    }
    return this;
  }
}
