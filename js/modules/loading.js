export default function loading(boolean) {
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
  } else if (boolean === false) {
    const load = document.querySelector('.loading');
    if (load) loading.remove();
  }
}
