
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');


menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});