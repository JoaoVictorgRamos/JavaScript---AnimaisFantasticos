export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}"px"`;
    },
  };

  function criarTooltipBox(element) {
    const tolltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tolltipBox.classList.add("tooltip");
    tolltipBox.innerText = text;
    document.body.appendChild(tolltipBox);
    return tolltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
