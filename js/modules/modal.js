export default class Modal {
  constructor(modal, abrirModal, fecharModal) {
    this.modal = document.querySelector(modal);
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
  }
}
