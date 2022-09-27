(() => {

  function fillArray(arr, pairsCount) {
    for (let index = 1; index <= pairsCount; index++) {
      arr.push(index);
      arr.push(index);
    }
    return arr;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function createCardRow(cardSuit) {
    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card__back");
    cardBack.textContent = cardSuit;

    const card = document.createElement("li");
    card.classList.add("card");

    card.append(cardFront);
    card.append(cardBack);

    card.addEventListener("click", cardClick);

    function cardClick() {
      console.log(this.childNodes[1].textContent);
    }
    return card;
  }

  function createForm() {
    const formLegend = document.createElement('legend');
    formLegend.classList.add('form__legend');
    formLegend.textContent = 'Задайте размер игрового поля:';

    const inputHorizontal = document.createElement('input');
    inputHorizontal.classList.add('horizontal');
    inputHorizontal.type = 'number';
    inputHorizontal.placeholder = 'По горизонтали';

    const inputVertical = document.createElement('input');
    inputVertical.classList.add('vertical');
    inputVertical.type = 'number';
    inputVertical.placeholder = 'По вертикали';

    const formBtn = document.createElement('button');
    formBtn.classList.add('form__btn');
    formBtn.type = 'submit';
    formBtn.textContent = 'Играть';

    const form = document.createElement('form');
    form.classList.add('form');
    form.id = 'form';
    form.action = '#';
    form.addEventListener('submit', drawGameArea);

    form.append(formLegend);
    form.append(inputHorizontal);
    form.append(inputVertical);
    form.append(formBtn);

    return form;
  }

  function drawGameArea() {
    // let container = document.querySelector('.container');
    // let list = document.querySelector('.list');

    horCnt = parseInt(document.querySelector('.horizontal').value);
    vertCnt = parseInt(document.querySelector('.vertical').value);
    let form = document.querySelector('.form');
    container.removeChild(form);


    // form.style.display = 'none';

    // container.removeChild(list);

    console.log(`по горизонтали: ${horCnt}`);
    console.log(`по вертикали: ${vertCnt}`);
    // console.log(typeof(horCnt));
  }

  function initGame(horCnt = 4, vertCnt = 4) {
    const form = createForm();

    document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector('.container');
      container.append(form);
    });
  }

  initGame();


  for (let vertIndex = 0; vertIndex < vertCnt; vertIndex++) {
    let cardList = document.createElement('ul');
    cardList.classList.add('list');

    for (let horIndex = 0; horIndex < horCnt; horIndex++) {

    }
  }


  // let cardList = document.createElement('ul');
  // cardList.classList.add('list');


  // // const pairsOfNumbers = 8;
  // let arr = [];
  // shuffle(fillArray(arr, horCnt = 4));
  // console.log(arr);

  // document.addEventListener("DOMContentLoaded", () => {
  //   const container = document.querySelector('.container');
  //   container.append(form);

  //   // add cards to DOM
  //   // const cardList = document.querySelector(".list");

  //   container.append(cardList);

  //   for (let index = 0; index < horCnt; index++) {
  //     let card = createCardRow(arr[index]);
  //     cardList.append(card);
  //   }
  // });

})();
