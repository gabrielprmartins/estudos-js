export default function initAnimationNumers() {
  const numbers = document.querySelectorAll('[data-numero]');

  if(numbers) {
    function animaNumeros() {
      numbers.forEach((n) => {
        const numbersText = +n.innerText.replace('%','');
        n.innerText = 0;
        const intervalNum = setInterval(() => {
          n.innerText++;
          if(n.innerText >= numbersText) {
            clearInterval(intervalNum);
            n.innerText = numbersText + '%';
          }
        }, 20 * Math.random());
      });
    }

    const observer = new MutationObserver(handleMutation);
    const observerTarget = document.querySelector('.numeros-curso');
    observer.observe(observerTarget, {attributes: true});

    function handleMutation(mutation) {
      if(mutation[0].target.classList.contains('anima-scroll')) {
        observer.disconnect();
        animaNumeros();
      }
    }
  }
}


