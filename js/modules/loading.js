export default function loading(boolean = true) {
  const loader = document.querySelector('.loading');

  const showLoader = () => {
    if (loader) loader.classList.add('active');
  };

  const removeLoader = () => {
    if (loader) loader.classList.remove('active');
  };

  if (boolean) showLoader();
  if (!boolean) removeLoader();
}
