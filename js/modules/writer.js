export default function initWriter() {
  const writers = document.querySelectorAll('[data-writer]');

  if(writers) {
    function startWriter(element) {
      element.classList.add('blink');
      const letters = element.innerText.split('');
      element.innerHTML = '';
      letters.forEach((letter, i) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 150 * i);
      });
    }
    
    writers.forEach(writer => startWriter(writer));
  }
}

