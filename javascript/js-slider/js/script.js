const swiper = new Swiper('.swiper', {
  slidesPerGroup: 1,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
