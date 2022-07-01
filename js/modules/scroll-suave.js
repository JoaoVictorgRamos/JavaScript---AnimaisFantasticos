export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function srollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //FORMA ALTERNATIVA
    /*   const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  }); */
  }

  linksInternos.forEach((links) => {
    links.addEventListener("click", srollToSection);
  });
}
