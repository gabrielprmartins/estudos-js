import MenuMobile from './modules/menu-mobile.js';
import TabNavigation from './modules/navegacao-por-tab.js';
import AnimationNumers from './modules/animation-numbers.js';
import Tooltip from './modules/tooltip.js';
import Writer from './modules/writer.js';
import HistoryApi from './modules/historyapi.js';
import AnimaScroll from './modules/anima-scroll.js';
import FetchPosts from './modules/fetch-posts.js';

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

const historyApi = new HistoryApi('header a', '.grid');
historyApi.init();

const fetchPosts = new FetchPosts('.posts-container', 9, '[data-post-more]');
fetchPosts.init();
