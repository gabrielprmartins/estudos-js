export default function initAnimationNumers() {
  const numbers = document.querySelectorAll('[data-numero]');

  if(numbers) {
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
}



