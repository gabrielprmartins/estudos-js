export default function initAnimaScroll() {
  const scroll = Array.from(document.querySelectorAll('[data-scroll]'));
  if(scroll[0]) {
    scroll[0].classList.add('anima-scroll');
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      scroll.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const sesaoVisivel = (sectionTop - windowMetade) < 0;
        if(sesaoVisivel) {
          item.classList.add('anima-scroll');
        } else {
          item.classList.remove('anima-scroll');
        }
      })
    }

    window.addEventListener('scroll', animaScroll);
  }
}

