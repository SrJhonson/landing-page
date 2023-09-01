const navbar = document.querySelector('.navbar');
const mobileNavBar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const dark = document.querySelector('checkbox');
const chk = document.getElementById('chk');

button.addEventListener('click', function () {
    mobileNavBar.classList.toggle('active');

});

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

const scrollanima = document.querySelectorAll('[data-anima="scroll"]');