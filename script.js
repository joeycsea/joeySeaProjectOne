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






// === Hamburger Slide-out Menu ===
const menuButton = document.getElementsByClassName('slidingMenuButton');
const slidingMenuButton = menuButton[0].children[0];

const slidingMenu = document.getElementsByClassName('slidingMenu');
const slidingMenuSlide = slidingMenu[0];

slidingMenuButton.addEventListener('click', function(){
   slidingMenuSlide.classList.toggle('reveal-active');
});