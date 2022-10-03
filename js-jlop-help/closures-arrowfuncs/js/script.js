// show red border in div elements
// (() => {
//
//   const divElements = document.querySelectorAll('div');
//   for (const el of divElements) el.style.border = '1px solid red';
// })();

///////////////////////////////////////////////////////////////////////////

// create button, push - increment counter
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.createElement('button');
//   let count = 0;

//   function increment() {
//     button.textContent = count++;
//   }

//   increment();

//   button.addEventListener('click', increment);

//   document.body.append(button);

// });

/////////////////////////////////////////////////
// delay after input
(() => {
  const WAIT_TIME_MS = 500;

  const textInput = document.createElement('input');
  const display = document.createElement('div');

  let timeout;

  textInput.addEventListener('input', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      display.textContent = textInput.value;
    }, WAIT_TIME_MS);
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.append(textInput);
    document.body.append(display);
  });
})();
