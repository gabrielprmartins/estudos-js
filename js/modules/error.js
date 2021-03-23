export default function erro(mensagem) {
  const grid = document.querySelector('.grid .center-column');
  grid.innerHTML = mensagem;
}
