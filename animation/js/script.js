let btn = document.querySelector('.hero__btn');
let title = document.querySelector('.title');

btn.addEventListener('click', function () {
  title.classList.toggle('animate__bounce');
})
