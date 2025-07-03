
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');


openMenu.addEventListener('click', () => {
    sidebar.classList.add('open');
    console.log('abriu')
})
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('open');
})
