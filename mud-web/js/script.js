var btn = {
  next: document.getElementById('select-next'),
}; // (*1)

var items = document.querySelectorAll(".item");
var index = 0;

btn.first.addEventListener('click', function () {
  index = 0;
  updateSelection();
});

btn.last.addEventListener('click', function () {
  index = items.length - 1;
  updateSelection();
});

btn.next.addEventListener('click', function () {
  index = (index + 1) % items.length;
  console.log('index == %d', index);
  updateSelection();
});

btn.prev.addEventListener('click', function () {
  index = (index + items.length - 1) % items.length; // (*2)
  updateSelection();
});

/***/

function updateSelection() {
  var active = document.querySelector('.item'); // (*3)
  console.log(active);

  active.classList.toggle('active');

}
