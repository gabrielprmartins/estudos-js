export default function initFakeApi() {

}

const next = document.querySelector('.proximo');
const prev = document.querySelector('.anterior');

const post = document.querySelector('[data-post="post"]');
const tituloPost = document.querySelector('[data-post="titulo"]');
const conteudoPost = document.querySelector('[data-post="conteudo"]');

const loading = document.querySelector('.loading');

function getPost(id, animation) {
  tituloPost.innerText = '';
  conteudoPost.innerText = '';
  post.removeAttribute('data-post', animation);
  loading.classList.add('active');
  tituloPost.appendChild(loading);
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(r => r.json())
  .then(body => {
    post.setAttribute('data-post', animation);
    tituloPost.removeChild(loading);
    tituloPost.innerText = body[id].title;
    tituloPost.setAttribute('data-post-id', body[id].id);
    conteudoPost.innerText = body[id].body.replace('\n', ' ');
  })
}

let cliques = -1;

next.addEventListener('click', () => {
  cliques++; 
  getPost(cliques, 'next');
  if(cliques > 0) {
    prev.classList.remove('disable');
  }
});

prev.classList.add('disable');
prev.addEventListener('click', () => {
  if(cliques >= 1) {
    cliques--;
    getPost(cliques, 'prev');
  }
})