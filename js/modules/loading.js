export default function loading(boolean, contentLoad = null) {
  if (boolean === true) {
    // eslint-disable-next-line no-shadow
    const loading = `
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
    const grid = document.querySelector('.grid .center-column');
    grid.innerHTML += loading;

    const loadContent = document.querySelector(contentLoad);
    if (loadContent) loadContent.appendChild(loading);
  } else if (boolean === false) {
    const load = document.querySelector('.loading');
    if (load) load.remove();
  }
}
