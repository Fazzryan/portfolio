// navbar fix
window.onscroll = function () {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fix');
    } else {
        nav.classList.remove('navbar-fix');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-aktif');
    navMenu.classList.toggle('hidden');
});
