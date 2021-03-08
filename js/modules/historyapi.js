import { activeFunctions } from '../script.js';
import { loading } from './loading.js';
import { erro } from './error.js';

export default function initHistoryApi() {
  const linksMenu = Array.from(document.querySelectorAll('header a'));

  if(linksMenu && loading) {
    function handleClick(event) {
      event.preventDefault();
      fetchPage(this.href);
      window.history.pushState(null, null, this.href);
    }
    
    async function fetchPage(url) {
      try {
        loading(true);
        const pageResponse = await fetch(url);
        if(!pageResponse.ok) throw new Error(pageResponse.statusText);
        const pageText = await pageResponse.text();
        replaceContent(pageText);
      } catch(err) {
        erro(err);
      } finally {
        loading(false);
      }
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