let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav-wrapper');
let menuLinks = menu.querySelectorAll('.nav__item');
// let btnLogin = document.querySelector('.hero__btn');

// burger click
burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
    document.body.classList.toggle('stop-scroll');
  })

// login button click -- Не работает!
// btnLogin.addEventListener('click',
//   function () {
//     burger.classList.remove('burger--active');
//     menu.classList.remove('nav--active');
//     document.body.classList.remove('stop-scroll');
//     console.log('btn click!..');
//   }
// )


// menu click
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
const swiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 300,
  allowTouchMove: true,
});


// set .hero height
let heroBlock = document.querySelector('.hero');
let headerHeight = document.querySelector('.header').clientHeight;
let swiperHeight = document.querySelector('.swiper').clientHeight;

heroBlock.style.height = swiperHeight + 'px';

// gallery
// select
const element = document.querySelector('.gallery__select');

const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  allowHTML: false
});


// gallery swiper
const gallerySwiper = new Swiper('.gallery__swiper', {
  loop: true,

  pagination: {
    el: '.gallery__swiper-pagination',
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

});

// accordion
  new Accordion('.catalog__accordion-container', {

  });

// events swiper
const eventsSwiper = new Swiper('.events__swiper', {
  loop: true,
  pagination: {
    el: '.events__swiper-pagination',
  },
});

// projects swiper
const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});
