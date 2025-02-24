// Função para carregar o header e o footer
async function loadModularContent() {
  // Carrega o header
  const header = await fetch('header.html').then((response) => response.text());
  document.getElementById('header').innerHTML = header;

  // Chama a função do menu hambúrguer após o carregamento do header
  iniciarMenuHamburguer();

  // Carrega o footer
  const footer = await fetch('footer.html').then((response) => response.text());
  document.getElementById('footer').innerHTML = footer;

  // Chama a função para destacar o item ativo
  setActiveMenu();
}

// Função para destacar o item ativo no menu
function setActiveMenu() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Função para ativar o menu hambúrguer após carregar o header
function iniciarMenuHamburguer() {
  const hamburguer = document.querySelector('.hamburguer');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburguer && navMenu) {
    hamburguer.addEventListener('click', () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('Elementos do menu hambúrguer não encontrados.');
  }
}

// Carrega o conteúdo modular
loadModularContent();
