export default class FetchPosts {
  constructor(postsContainer, postsLimit) {
    this.postsContainer = document.querySelector(postsContainer);
    this.postsLimit = postsLimit;
    this.page = 1;
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

    this.postsContainer.innerHTML = this.postTemplate;
  }

  init() {
    if (this.postsContainer) {
      this.addPostsIntoDOM();
      this.addAnimationClass();
    }
    return this;
  }
}
