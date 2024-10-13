// Toggle drawer
const menuIcon = document.getElementById('menu-icon');
const drawer = document.getElementById('drawer');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
    drawer.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    drawer.classList.remove('open');
});
