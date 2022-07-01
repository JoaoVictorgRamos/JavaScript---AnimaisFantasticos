import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu() {
      menuButton.classList.add("active");
      menuLista.classList.add("active");
      outsideClick(menuLista, eventos, () => {
        menuButton.classList.remove("active");
        menuLista.classList.remove("active");
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}