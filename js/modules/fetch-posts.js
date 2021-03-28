import loading from './loading.js';
import debounce from './debounce.js';

export default function initPosts() {
  const postsContainer = document.querySelector('.posts-container');
  const buscador = document.querySelector('[data-post="busca"]');

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

  const showAndRemoveLoading = () => {
    loading(true);
    setTimeout(() => {
      loading(false);
      getNextPosts();
    }, 1000);
  };

  const onWindowScroll = () => {
    const scroll = window.scrollY;
    const height = document.body.offsetHeight - window.innerHeight;
    const isPageBottom = scroll > height * 0.99;

    if (isPageBottom) {
      if (page < 12) showAndRemoveLoading();
    }
  };

  const addEventOnWindowScroll = () => {
    window.addEventListener('scroll', debounce(onWindowScroll), 200);
  };

  const showPostIfMatchInputValue = (inputValue) => (post) => {
    const postTitle = post.querySelector('.post-title').textContent.toLowerCase();
    const postBody = post.querySelector('.post-body').textContent.toLowerCase();

    const matchSearch = postTitle.includes(inputValue) || postBody.includes(inputValue);
    if (matchSearch) {
      post.style.display = 'block';
      return;
    }
    post.style.display = 'none';
  };

  const handleInputValue = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(showPostIfMatchInputValue(inputValue));
  };

  const addSearchingEvent = () => {
    buscador.addEventListener('input', handleInputValue);
  };

  const init = () => {
    if (postsContainer) {
      addPostsIntoDOM();
      addAnimationClass();
      addEventOnWindowScroll();
      addSearchingEvent();
    }
  };

  init();
}
