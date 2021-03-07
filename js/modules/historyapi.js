import { activeFunctions } from '../script.js';

export default function initHistoryApi() {
  const linksMenu = Array.from(document.querySelectorAll('header a'));
  const loading = document.querySelector('.loading');

  if(linksMenu && loading) {
    function handleClick(event) {
      event.preventDefault();
      fetchPage(this.href);
      window.history.pushState(null, null, this.href);
    }
    
    async function fetchPage(url) {
      loading.classList.add('active');
      document.querySelector('.grid .center-column').innerHTML = '';
      document.querySelector('.grid .center-column').appendChild(loading);
      const pageResponse = await fetch(url);
      const pageText = await pageResponse.text();
    
      replaceContent(pageText);
    }
    
    function replaceContent(content) {
      const newHtml = document.createElement('div');
      newHtml.innerHTML = content;
    
      const oldContent = document.querySelector('.grid');
      const newContent = newHtml.querySelector('.grid');
    
      oldContent.innerHTML = newContent.innerHTML;
      document.title = newHtml.querySelector('title').innerText;
      activeFunctions();
    }
    
    window.addEventListener('popstate', () => fetchPage(window.location.href));
    
    linksMenu.forEach(l => l.addEventListener('click', handleClick));
  }
}