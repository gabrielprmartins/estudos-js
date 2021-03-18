export default class Writer {
  constructor(writers) {
    this.writers = document.querySelectorAll(writers);
  }

  configWriter(element) {
    element.classList.add('blink');
    this.letters = element.innerText.split('');
    element.innerHTML = '';
    this.writerAnimation(element);
  }

  writerAnimation(element) {
    this.letters.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 150 * i);
    });
  }

  addEventWriters() {
    this.writers.forEach((writer) => this.configWriter(writer));
  }

  init() {
    this.addEventWriters();
  }
}
