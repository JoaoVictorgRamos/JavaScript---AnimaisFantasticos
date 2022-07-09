import initScrollSuave from "../js/modules/scroll-suave.js";
import initAnimacaoScroll from "../js/modules/scroll-animacao.js";
import initAccordion from "../js/modules/accordion.js";
import initTabNav from "../js/modules/tab-nav.js";
import initModal from "../js/modules/modal.js";
import initTooltip from "../js/modules/tooltip.js";
import initDropdownMenu from "../js/modules/Dropdown-Menu.js";
import initMenuMobile from "../js/modules/menu-mobile.js";
import initFuncionamento from "../js/modules/funcionamento.js";
import initFecthAnimais from "../js/modules/fetch-animais.js";
import initFetchBitcoin from "../js/modules/fetch-bitcoins.js";
import SlideNav from "../js/slide.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFecthAnimais();
initFetchBitcoin();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
