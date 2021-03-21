export default class AnimationNumers {
  constructor(numbers, observerClass, target) {
    this.numbers = document.querySelectorAll(numbers);
    this.target = document.querySelector(target);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  static adicionaNumeros(n) {
    const numbersText = +n.innerText.replace('%', '');
    n.innerText = 0;
    const intervalNum = setInterval(() => {
      n.innerText++;
      if (n.innerText >= numbersText) {
        clearInterval(intervalNum);
        n.innerText = `${numbersText} %`;
      }
    }, 20 * Math.random());
  }

  animaNumeros() {
    this.numbers.forEach((n) => this.constructor.adicionaNumeros(n));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  createObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.target, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.target) {
      this.createObserver();
    }
    return this;
  }
}
