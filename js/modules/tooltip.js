export default class Tooltip {
  constructor(tooltips) {
    this.tooltip = Array.from(document.querySelectorAll(tooltips));

    this.showTooltip = this.showTooltip.bind(this);
    this.hiddenTooltip = this.hiddenTooltip.bind(this);
    this.handleTooltip = this.handleTooltip.bind(this);
  }

  showTooltip(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    this.tooltipBox.style.left = `${event.pageX + 20}px`;
  }

  hiddenTooltip({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.hiddenTooltip);
    currentTarget.removeEventListener('mousemove', this.showTooltip);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement('div');
    const tooltipContent = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = tooltipContent;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  handleTooltip({ currentTarget }) {
    this.createTooltip(currentTarget);
    currentTarget.addEventListener('mousemove', this.showTooltip);
    currentTarget.addEventListener('mouseleave', this.hiddenTooltip);
  }

  addTooltipEvent() {
    this.tooltip.forEach((item) => item.addEventListener('mouseover', this.handleTooltip));
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
