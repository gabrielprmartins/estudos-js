export default class FetchPosts {
  constructor(postsContainer, postsLimit, moreButton) {
    this.postsContainer = document.querySelector(postsContainer);
    this.postsLimit = postsLimit;
    this.page = 1;
    this.activeButtonClass = 'active';
    this.buttonMore = document.querySelector(moreButton);
  }

  addAnimationClass() {
    this.postsContainer.classList.add('get-in');
  }

  async fetchPosts() {
    this.response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.postsLimit}&_page=${this.page
    }`);
    return this.response.json();
  }

  async addPostsIntoDOM() {
    this.posts = await this.fetchPosts();
    this.postTemplate = this.posts.map(({ id, title, body }) => `
      <div class="post">
        <div class="post-info">
          <h3 class="post-title">${title}</h3>
          <p class="post-body">${body}</p>
        </div>
        <div class="post-id">${id}</div>
      </div>
    `).join('');

    this.postsContainer.innerHTML += this.postTemplate;
    this.showMoreButton();
  }

  showMoreButton() {
    this.buttonMore.classList.add(this.activeButtonClass);
    this.hiddenMoreButton();
  }

  hiddenMoreButton() {
    if (this.page > 12) {
      this.buttonMore.classList.remove(this.activeButtonClass);
    }
  }

  // corrigir erro
  getNextPosts() {
    this.page++;
    this.addPostsIntoDOM();
  }

  addMoreButtonEvent() {
    this.buttonMore.addEventListener('click', this.getNextPosts);
  }

  init() {
    if (this.postsContainer) {
      this.addPostsIntoDOM();
      this.addAnimationClass();
      this.addMoreButtonEvent();
    }
    return this;
  }
}
