const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})