import erro from './error.js';

export default class FetchPage {
  constructor(url, callback, oldContent, toReplaceContent = true) {
    this.url = url;
    if (oldContent) this.oldContent = document.querySelector(oldContent);
    this.callback = callback;
    this.toReplaceContent = toReplaceContent;
  }

  async fetchPage() {
    try {
      this.pageResponse = await fetch(this.url);
      if (!this.pageResponse.ok) throw new Error(this.pageResponse.statusText);
      this.pageText = await this.pageResponse.text();
      if (this.toReplaceContent) this.replaceContent(this.pageText);
      if (this.callback) this.callback();
    } catch (err) {
      erro(err);
    }
  }

  replaceContent(content) {
    this.newHtml = document.createElement('div');
    this.newHtml.innerHTML = content;

    this.newContent = this.newHtml.querySelector('.grid');

    this.oldContent.innerHTML = this.newContent.innerHTML;
    document.title = this.newHtml.querySelector('title').innerText;
  }

  init() {
    if (this.url && this.oldContent) {
      this.fetchPage();
    }
    return this;
  }
}
