export default function initWriter() {
  const writer = document.querySelector('[data-writer]');

  if(writer) {
    function startWriter(element) {
      element.classList.add('blink');
      const letters = element.innerText.split('');
      element.innerHTML = '';
      console.log(letters)
      letters.forEach((letter, i) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 150 * i);
      })
    }
    
    startWriter(writer);
  }
}

