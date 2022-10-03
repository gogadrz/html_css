let inputSetTime = document.querySelector('.input-set-time');
let buttonStart = document.querySelector('.button-start-timer');
let counter = document.querySelector('.counter');
let timerId = null;
let seconds = 0;

// buttonStart.addEventListener('click', startTimer);
inputSetTime.addEventListener('input', changeTimer);

// function startTimer() {
//   counter.textContent = inputSetTime.value;
//   let seconds = parseInt(inputSetTime.value);

//   timerId = setInterval(bum, 3000);
// }

// function bum() {
//   counter.textContent = 'bum';
// }

function changeTimer() {
  seconds = parseInt(inputSetTime.value);
  counter.textContent = seconds;

  clearInterval(timerId);
  timerId = setInterval(updateCount, 1000);
}

function updateCount() {
  // seconds = parseInt(inputSetTime.value);
  seconds = parseInt(counter.textContent);
  if (seconds > 0) {
    seconds -= 1;
    counter.textContent = seconds;
  }
  else
  {
    clearInterval(timerId);
    inputSetTime.value='';
  }
}
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон
