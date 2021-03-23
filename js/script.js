import MenuMobile from './modules/menu-mobile.js';
import TabNavigation from './modules/navegacao-por-tab.js';
import AnimationNumers from './modules/animation-numbers.js';
import Tooltip from './modules/tooltip.js';
import Writer from './modules/writer.js';
import initHistoryApi from './modules/historyapi.js';
import initAnimaScroll from './modules/anima-scroll.js';

const menuMobile = new MenuMobile('[data-menu="botao"]', '[data-menu="lista"]');
menuMobile.init();

const tabNav = new TabNavigation('[data-nav="controles"] li button', '[data-nav="conteudo"] section');
tabNav.init();

const animationNumbers = new AnimationNumers('[data-numero]', 'anima-scroll', '.numeros-curso');
animationNumbers.init();

initAnimaScroll();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const writers = new Writer('[data-writer]');
writers.init();

initHistoryApi();

export function activeFunctions() {
  initAnimaScroll();
  const tabNavActive = new TabNavigation('[data-nav="controles"] li button', '[data-nav="conteudo"] section');
  tabNavActive.init();
  const tooltipActive = new Tooltip('[data-tooltip]');
  tooltipActive.init();
  const writersActive = new Writer('[data-writer]');
  writersActive.init();
}
