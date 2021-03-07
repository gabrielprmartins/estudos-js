export default function initTabNavigation() {
  const tabControls = document.querySelectorAll('[data-nav="controles"] li button');
  const tabContent = document.querySelectorAll('[data-nav="conteudo"] section');
  if(tabControls[0] && tabContent[0]) {
    tabControls[0].classList.add('ativo');
    tabContent[0].classList.add('ativo');

    function changeTab(index) {
      tabContent.forEach(item => item.classList.remove('ativo'));
      tabControls.forEach(item => item.classList.remove('ativo'));
      tabContent[index].classList.add('ativo');
      tabControls[index].classList.add('ativo');
    }

    tabControls.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        changeTab(index);
      });
    })
  }
}