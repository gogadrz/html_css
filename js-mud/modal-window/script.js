const btn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.submitBtn');

btn.addEventListener('click', (e) => {
		modal.classList.remove('modal--visible');
    modal.classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});

submitBtn.addEventListener('click', (el) => {
  modalOverlay.classList.remove('modal-overlay--visible');
  modal.classList.remove('modal--visible');

  let horInput = modal.querySelector('.widthSize');
  console.log(horInput.value);

});
