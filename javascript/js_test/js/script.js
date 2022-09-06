// 1.
// let text = document.querySelector('.text');

// text.style.color = 'green';
// ==============================================

// 2.
document.querySelectorAll('.text').forEach(function (element) {
  element.style.color = 'blue';
});
// ==============================================
// отодвинуть блок на 100пикс по клику
let block = document.querySelector('.block');

block.addEventListener('click', function () {
  block.classList.add('translate');
})
