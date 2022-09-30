(() => {
  let ROW = 2;
  let COL = 2;

  const containerGame = document.querySelector(".container__game");
  const againBtn = document.querySelector('.modal-again__sumbit-btn');
  const modalAgain = document.querySelector('.modal-again');
  const modal = document.querySelector('.modal-again__form');
  const modalStart = document.querySelector('.modal-start');
  const startForm = document.querySelector('.start-form');
  const startBtn = startForm.querySelector('.start-form__submit-btn');

  let cardsArray = [];
  let prevCard = null;
  let prevCardIndex = null;

  // заполнить и вернуть массив парами цифр (попорядку)
  function fillArray(arr, totalItems) {
    for (let index = 1; index <= totalItems / 2; index++) {
      arr.push({ suit: index, opened: false });
      arr.push({ suit: index, opened: false });
    }
    return arr;
  }

  // перемешать и вернуть заполненный массив
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

  // создать и вернуть карту
  function createCard(cardSuit, cardCurrentIndex) {
    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card__back");
    cardBack.textContent = cardSuit;

    const cardIndex = document.createElement("div");
    cardIndex.classList.add("card__index");
    cardIndex.textContent = cardCurrentIndex;

    const card = document.createElement("li");
    card.classList.add("card");
    card.style.width = 80 / COL + "vw";
    card.style.height = 80 / ROW + "vh";

    card.append(cardFront);
    card.append(cardBack);
    card.append(cardIndex);

    card.addEventListener("click", cardClick);

    return card;
  }

  // click по карте
  function cardClick() {
    const curCardIndex = parseInt(this.childNodes[2].textContent);
    if (this.classList.contains("card--open")) return;

    if (
      prevCard !== null &&
      parseInt(prevCard.childNodes[1].textContent) ===
        cardsArray[curCardIndex].suit
    ) {
      this.classList.add("card--open");
      cardsArray[curCardIndex].opened = true;
      prevCard = null;
      prevCardIndex = null;
    } else if (
      prevCard !== null &&
      parseInt(prevCard.childNodes[1].textContent) !==
        cardsArray[curCardIndex].suit
    ) {
      this.classList.add("card--open");
      cardsArray[curCardIndex].opened = true;

      const closeCard = prevCard;
      setTimeout(() => closeCard.classList.remove("card--open"), 200);

      cardsArray[prevCardIndex].opened = false;
      prevCard = this;
      prevCardIndex = curCardIndex;
    } else {
      this.classList.add("card--open");
      cardsArray[curCardIndex].opened = true;
      prevCard = this;
      prevCardIndex = curCardIndex;
    }

    // если игра закончена, показать сообщение через 1 секунду
    if (gameOver()) {
      let list = containerGame.querySelectorAll(".list");

      list.forEach(function (el) {
        el.classList.add("finished");
      });

      setTimeout(() => showGameOver(), 1000);
    }
  }

  // проверить закончена ли игра
  function gameOver() {
    let openedCardCnt = 0;
    for (let iCard of cardsArray) {
      if (iCard.opened) openedCardCnt++;
    }

    return openedCardCnt === ROW * COL;
  }

  // показать форму "играть еще"
  function showGameOver() {

    const modalAgain = document.querySelector('.modal-again');
    const modal = document.querySelector('.modal-again__form');

    modalAgain.classList.add('modal-overlay--visible');
    modal.classList.remove('modal--visible');
    modal.classList.add('modal--visible');

    // restartGame();
  }

  function getFontSize() {
    const hSize = parseInt(document.querySelector(".card").clientHeight);
    const wSize = parseInt(document.querySelector(".card").clientWidth);
    return Math.min(hSize, wSize) - 4 + "px";
  }

  function initGame() {

    modalStart.classList.add('modal-overlay--visible');
    startForm.classList.add('modal--visible');

    startBtn.addEventListener('click', formSubmit);

    againBtn.addEventListener('click', () => {
      modalAgain.classList.remove('modal-overlay--visible');
      modal.classList.remove('modal--visible');
      restartGame();
    })

    shuffle(fillArray(cardsArray, ROW * COL));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < COL; colIndex++) {
        let card = createCard(cardsArray[cardIndex].suit, cardIndex++);
        cardList.append(card);
      }
    }

    const fSize = getFontSize();
    const x = containerGame.querySelectorAll(".card__back");
    x.forEach(function (el) {
      el.style.fontSize = fSize;
    });
  }

  function restartGame() {
    cardsArray = [];

    prevCard = null;
    prevCardIndex = null;
    containerGame.innerHTML = "";

    modalStart.classList.add('modal-overlay--visible');
    startForm.classList.add('modal--visible');

    shuffle(fillArray(cardsArray, ROW * COL));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < COL; colIndex++) {
        let card = createCard(cardsArray[cardIndex].suit, cardIndex++);
        cardList.append(card);
      }
    }

    const fSize = getFontSize();
    const x = containerGame.querySelectorAll(".card__back");
    x.forEach(function (el) {
      el.style.fontSize = fSize;
    });
  }

  function redrawField() {
    cardsArray = [];

    prevCard = null;
    prevCardIndex = null;
    containerGame.innerHTML = "";

    shuffle(fillArray(cardsArray, ROW * COL));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < COL; colIndex++) {
        let card = createCard(cardsArray[cardIndex].suit, cardIndex++);
        cardList.append(card);
      }
    }

    const fSize = getFontSize();
    const x = containerGame.querySelectorAll(".card__back");
    x.forEach(function (el) {
      el.style.fontSize = fSize;
    });
  }

  function formSubmit() {
    modalStart.classList.remove('modal-overlay--visible');
    startForm.classList.remove('modal--visible');

    const widthSize = startForm.childNodes[3].value;
    const heightSize = startForm.childNodes[5].value;
    if (widthSize && heightSize) {
      ROW = parseInt(widthSize);
      COL = parseInt(heightSize)
      redrawField();
    }
  }

  initGame();
})();
