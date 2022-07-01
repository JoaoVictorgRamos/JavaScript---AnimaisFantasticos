export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containermodal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containermodal) {
    function abrirModal(event) {
      event.preventDefault();
      containermodal.classList.add("ativo");
    }

    function fecharModal(event) {
      event.preventDefault();
      containermodal.classList.remove("ativo");
    }

    function cliqueForaDoModal(event) {
      if (event.target === this) {
        fecharModal(event);
      }
    }

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containermodal.addEventListener("click", cliqueForaDoModal);
  }
}
