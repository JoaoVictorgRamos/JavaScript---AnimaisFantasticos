import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    event.preventDefault();
    menuButton.classList.add("active");
    menuLista.classList.add("active");
    outsideClick(menuLista, eventos, () => {
      menuButton.classList.remove("active");
      menuLista.classList.remove("active");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
