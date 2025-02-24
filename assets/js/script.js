/* ATIVAR COR DO FUNDO ELEMENTO NO MENU*/
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();// comeca
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

/* ACORDION PÁGINA PRINCIPAL */
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const body = accordion.querySelector('.accordion-body');
    body.classList.toggle('active');
  });
});