// === Modal appears (Book a Party) when they click button ===
const modal = document.querySelector('.modal');
const section = document.getElementsByClassName('hostAParty');
const findOutMoreButton = section[0].children[2];
const closeButton = document.querySelector('.closeButton');
const overlay = document.getElementById('overlay');


function toggleModal () {
   modal.classList.toggle('modal-active');
   overlay.classList.toggle('overlay-active');
}

findOutMoreButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);