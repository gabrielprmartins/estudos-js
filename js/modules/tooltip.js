export default function initTooltip() {
  const tooltip = Array.from(document.querySelectorAll('[data-tooltip]'));

  if (tooltip) {
    function createTooltip(element) {
      const tooltipBox = document.createElement('div');
      const tooltipContent = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = tooltipContent;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    const showTooltip = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };

    const hiddenTooltip = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mousemove', showTooltip);
        this.element.removeEventListener('mouseleave', hiddenTooltip);
      },
    };

    function handleTooltip() {
      const tooltipBox = createTooltip(this);

      showTooltip.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', showTooltip);

      hiddenTooltip.element = this;
      hiddenTooltip.tooltipBox = tooltipBox;
      this.addEventListener('mouseleave', hiddenTooltip);
    }

    tooltip.forEach((item) => item.addEventListener('mouseover', handleTooltip));
  }
}
