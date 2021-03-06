export default function initChuckNorrisJokes() {
  const piadaParagrafo = document.querySelector('.piada-paragrafo');
  const proximaPiada = document.querySelector('.btn-proximo');
  const loading = document.querySelector('.loading');

  if(!piadaParagrafo.innerText.length) {
    loading.classList.add('active');
    piadaParagrafo.appendChild(loading);
  }

  function puxarPiada() {
    piadaParagrafo.innerText = '';
    loading.classList.add('active');
    piadaParagrafo.appendChild(loading);
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json()
    .then(piada => {
      piadaParagrafo.innerText = piada.value;
    }));
  }

  proximaPiada.addEventListener('click', puxarPiada);
  puxarPiada();
}