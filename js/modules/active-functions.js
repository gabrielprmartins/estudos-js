import TabNavigation from './navegacao-por-tab.js';
import Tooltip from './tooltip.js';
import Writer from './writer.js';
import AnimaScroll from './anima-scroll.js';

export default function activeFunctions() {
  const writersActive = new Writer('[data-writer]');
  writersActive.init();
  const animaScrollActive = new AnimaScroll('[data-scroll]');
  animaScrollActive.init();
  const tabNavActive = new TabNavigation('[data-nav="controles"] li button', '[data-nav="conteudo"] section');
  tabNavActive.init();
  const tooltipActive = new Tooltip('[data-tooltip]');
  tooltipActive.init();
}
