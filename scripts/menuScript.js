// === Hamburger Slide-out Menu ===
const menuButton = document.getElementsByClassName('slidingMenuButton');
const slidingMenuButton = menuButton[0].children[0];

const slidingMenu = document.getElementsByClassName('slidingMenu');
const slidingMenuSlide = slidingMenu[0];

slidingMenuButton.addEventListener('click', function (e) {
   slidingMenuSlide.classList.toggle('reveal-active');
   const icon = this;
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-x');
});