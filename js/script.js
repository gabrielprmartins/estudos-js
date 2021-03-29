import MenuMobile from './modules/menu-mobile.js';
import TabNavigation from './modules/navegacao-por-tab.js';
import AnimationNumers from './modules/animation-numbers.js';
import Tooltip from './modules/tooltip.js';
import Writer from './modules/writer.js';
import AnimaScroll from './modules/anima-scroll.js';
import Modal from './modules/modal.js';
import initPosts from './modules/fetch-posts.js';
import { initProdutos } from './modules/produtos.js';
import Contador from './modules/contador.js';

const menuMobile = new MenuMobile('[data-menu="botao"]', '[data-menu="lista"]');
menuMobile.init();

const tabNav = new TabNavigation('[data-nav="controles"] li button', '[data-nav="conteudo"] section');
tabNav.init();

const animationNumbers = new AnimationNumers('[data-numero]', 'anima-scroll', '.numeros-curso');
animationNumbers.init();

const animaScroll = new AnimaScroll('[data-scroll]');
animaScroll.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const writers = new Writer('[data-writer]');
writers.init();

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init();

initPosts();
initProdutos();

const contador = new Contador('.contador');
contador.init();
