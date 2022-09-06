let burgerBtn = document.querySelector('.burger');
let hdrNav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click',

  function () {
    hdrNav.classList.toggle('header__nav_active');
  });
