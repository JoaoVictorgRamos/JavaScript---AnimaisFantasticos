export default function initTabNav() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");

  const tabcontent = document.querySelectorAll("[data-tab='content'] section");
  tabcontent[0].classList.add("ativo");

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabcontent[index].dataset.anime;
    tabcontent[index].classList.add("ativo", direcao);
  }

  if (tabmenu.length && tabcontent.length) {
    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
