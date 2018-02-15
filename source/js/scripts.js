var menuToggle = function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
};

var navMain = document.querySelector('.main-nav');
var navToggleOpen = document.querySelector('.main-nav__toggle--open');
var navToggleClose = document.querySelector('.main-nav__toggle--close');

navMain.classList.remove('main-nav--nojs');

navToggleOpen.addEventListener('click', menuToggle);
navToggleClose.addEventListener('click', menuToggle);
