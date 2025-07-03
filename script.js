

const closeModalBtn = document.getElementById('close_modal_1');
const openModalBtn = document.getElementById('open_modal_1');
const modal = document.getElementById('modal_1');



openModalBtn.addEventListener('click', () => {
    modal.classList.add('open');
});
closeModalBtn.addEventListener('click', () =>{
    modal.classList.remove('open');
}); 