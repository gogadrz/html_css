let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-wrapper');
let menuLinks = menu.querySelectorAll('.nav__item');
// let btnLogin = document.querySelector('.header__login-btn');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
    // btnLogin.classList.toggle('header__login-btn--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  })
})


///////////////////////////////////////////////
// swiper
///////////////////////////////////////////////
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
