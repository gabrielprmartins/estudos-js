import debounce from './debounce.js';

export default function animaScroll() {
  const target = document.querySelectorAll('[data-scroll]');
  const animationClass = 'anima-scroll';
  target[0].classList.add(animationClass);

  const animeScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach((element) => {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  };

  if (target.length) {
    window.addEventListener('scroll', debounce(animeScroll, 0));
  }
}
