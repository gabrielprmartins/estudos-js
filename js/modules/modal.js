export default class Modal {
  constructor(containerModal, abrirModal, fecharModal) {
    this.containerModal = document.querySelectorAll(containerModal);
    this.abrirModal = document.querySelectorAll(abrirModal);
    this.fecharModal = document.querySelectorAll(fecharModal);
    this.activeClass = 'active';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClickModal = this.outsideClickModal.bind(this);
  }

  toggleModal() {
    this.containerModal.forEach((modal) => modal.classList.toggle(this.activeClass));
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outsideClickModal(event) {
    this.containerModal.forEach((modal) => {
      if (event.target === modal) {
        this.toggleModal();
      }
    });
  }

  addModalEvents() {
    this.abrirModal.forEach((btn) => btn.addEventListener('click', this.eventToggleModal));
    this.fecharModal.forEach((btn) => btn.addEventListener('click', this.eventToggleModal));
    this.containerModal.forEach((modal) => modal.addEventListener('click', this.outsideClickModal));
  }

  init() {
    if (this.containerModal.length && this.abrirModal.length && this.fecharModal.length) {
      this.addModalEvents();
    }
    return this;
  }
}
