let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');

let menuLinks = menu.querySelectorAll('.nav__item');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (elem) {
  elem.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  })
})
