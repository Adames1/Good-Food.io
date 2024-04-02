// abrir menu
function openMenu() {
    const menu = document.querySelector('.content-menu');
    menu.classList.add('open');
}

// cerrar menu
function closeMenu() {
    const menu = document.querySelector('.content-menu');
    menu.classList.remove('open');
}

// cerra menu con cada link de navegacion
function closeMenuLinks() {
    const navLinks = document.querySelectorAll('.list-link');

    navLinks.forEach(l => l.addEventListener('click', () => {
        closeMenu();
    }))
}

closeMenuLinks();

// aplicar background con scroll a header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    let limitScroll = window.scrollY;

    if (limitScroll > 100) {
        header.style.backgroundColor = '#171C23';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// activar boton scroll up con scroll bar
window.addEventListener('scroll', () => {
    const btnScrollUp = document.getElementById('scrollup');
    let limitScroll = window.scrollY;

    if (limitScroll > 400) {
        btnScrollUp.classList.add('active');
    } else {
        btnScrollUp.classList.remove('active');
    }
});