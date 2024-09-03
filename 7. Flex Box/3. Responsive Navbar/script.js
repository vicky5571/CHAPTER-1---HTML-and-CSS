const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// Kalo gak ada class slide maka tambahin classnya
// Kalo ada class slide maka ilangin classnya

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
})