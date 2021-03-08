export function loading(boolean) {
if(boolean === true) {
  const loading = `
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  const grid = document.querySelector('.grid .center-column');
  grid.innerHTML = loading;
} else if(boolean === false) {
    const loading = document.querySelector('.loading');
    if(loading) loading.remove();
  }
}


