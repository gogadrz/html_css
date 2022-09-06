let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__list');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('header__nav_active');

    document.body.classList.toggle('stop-scroll');
  });

console.log(menu);

menuLinks.forEach(function (elm) {
  console.log(elm);

  elm.addEventListener('click', function () {
    burger.classList.remove('burger_active');
    menu.classList.remove('header__nav_active');

    document.body.classList.remove('stop-scroll')
  })
})

let articlesMore = document.querySelector('.articles_more');
let articles = document.querySelectorAll('.articles__item');

console.log(articlesMore);

articlesMore.addEventListener('click',

  function () {
    articles.forEach(function (el) {
      el.classList.toggle('articles__item_visible');
    });

    articlesMore.closest('.articles_center').classList.add('articles_center_hidden');
  }
)
