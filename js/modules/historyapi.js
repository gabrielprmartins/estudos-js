import { initProdutos } from './produtos.js';
import initPosts from './fetch-posts.js';
import FetchPage from './fetch-page.js';

export default class HistoryApi {
  constructor(links, changeContent) {
    this.linksMenu = Array.from(document.querySelectorAll(links));
    this.oldContent = changeContent;
    this.linkProdutos = document.querySelector('[data-menu="lista"] li:first-child a').href;
    this.linkBlog = document.querySelector('[data-menu="lista"] li:nth-child(2) a').href;

    this.addLinksEvent = this.addLinksEvent.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
  }

  fetchOwnPage(url, callback = null, oldContent = this.oldContent) {
    this.fetchPage = new FetchPage(url, callback, oldContent);
    return this.fetchPage.init();
  }

  addLinksEvent() {
    this.linksMenu.forEach((l) => l.addEventListener('click', this.onClickLink));
  }

  onClickLink(event) {
    event.preventDefault();
    this.fetchOwnPage(event.currentTarget.href, initProdutos);
    this.fetchOwnPage(event.currentTarget.href, initPosts);
    window.history.pushState(null, null, event.currentTarget.href);
  }

  onPopStatePage() {
    window.addEventListener('popstate', () => {
      this.fetchOwnPage(window.location.href, initProdutos);
      this.fetchOwnPage(window.location.href, initPosts);
    });
  }

  ifPage() {
    if (window.location.href === this.linkProdutos) {
      window.onload = () => {
        this.fetchOwnPage(this.linkProdutos, initProdutos);
      };
    }
    if (window.location.href === this.linkBlog) {
      window.onload = () => {
        this.fetchOwnPage(this.linkBlog, initPosts);
      };
    }
  }

  init() {
    if (this.linksMenu.length && this.oldContent) {
      this.addLinksEvent();
      this.onPopStatePage();
      this.ifPage();
    }
    return this;
  }
}
