import loading from './loading.js';

export default function initPosts() {
  const postsContainer = document.querySelector('.posts-container');
  const postsLimit = 9;
  let page = 1;

  const addAnimationClass = () => {
    postsContainer.classList.add('get-in');
  };

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsLimit}&_page=${page
    }`);
    return response.json();
  };

  const addPostsIntoDOM = async () => {
    const posts = await fetchPosts();
    const postTemplate = posts.map(({ id, title, body }) => `
      <div class="post">
        <div class="post-info">
          <h3 class="post-title">${title}</h3>
          <p class="post-body">${body}</p>
        </div>
        <div class="post-id">${id}</div>
      </div>
    `).join('');

    postsContainer.innerHTML += postTemplate;
  };

  const getNextPosts = () => {
    page++;
    addPostsIntoDOM();
  };

  const removeLoading = (loader) => {
    setTimeout(() => {
      postsContainer.removeChild(loader);
      getNextPosts();
    }, 1000);
  };

  const showLoading = () => {
    const loaderHtml = loading();
    const loader = document.createElement('div');
    loader.innerHTML = loaderHtml;
    postsContainer.appendChild(loader);
    removeLoading(loader);
  };

  const onWindowScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    const isPageBottom = scrollTop + clientHeight >= scrollHeight - 10;
    if (isPageBottom) {
      showLoading();
    }
  };

  const addEventOnWindowScroll = () => {
    window.addEventListener('scroll', onWindowScroll);
  };

  const init = () => {
    if (postsContainer) {
      addPostsIntoDOM();
      addAnimationClass();
      addEventOnWindowScroll();
    }
  };

  init();
}
