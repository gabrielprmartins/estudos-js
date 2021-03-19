import MenuMobile from './modules/menu-mobile.js';
import initTabNavigation from './modules/navegacao-por-tab.js';
import initAnimationNumers from './modules/animation-numbers.js';
import initAnimaScroll from './modules/anima-scroll.js';
import initTooltip from './modules/tooltip.js';
import Writer from './modules/writer.js';
import initHistoryApi from './modules/historyapi.js';

const menuMobile = new MenuMobile('[data-menu="botao"]', '[data-menu="lista"]');
menuMobile.init();

initTabNavigation();
initAnimationNumers();
initAnimaScroll();
initTooltip();

const writers = new Writer('[data-writer]');
writers.init();

initHistoryApi();

export function activeFunctions() {
  initTabNavigation();
  initAnimaScroll();
  initTooltip();
  const writersActive = new Writer('[data-writer]');
  writersActive.init();
}
