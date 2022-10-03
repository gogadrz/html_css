(() => {
  const TIMER_START_VALUE = 60;
  const DEFAULT_WIDTH = 4;
  const DEFAULT_HEIGHT = 4;

  let heightGameField = DEFAULT_HEIGHT;
  let widthGameField = DEFAULT_WIDTH;

  let timerValue = TIMER_START_VALUE;
  let timerId = null;

  const containerGame = document.querySelector(".container__game");
  const againBtn = document.querySelector(".modal-again__sumbit-btn");
  const modalAgain = document.querySelector(".modal-again");
  const modal = document.querySelector(".modal-again__form");
  const modalStart = document.querySelector(".modal-start");
  const startForm = document.querySelector(".start-form");
  const startBtn = startForm.querySelector(".start-form__submit-btn");
  const subtitle = document.querySelector(".modal-again__subtitle");

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
    card.style.width = 80 / widthGameField + "vw";
    card.style.height = 80 / heightGameField + "vh";

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
      let timer = document.querySelector(".timer__counter");

      timer.classList.add("color-orange");

      list.forEach(function (el) {
        el.classList.add("finished");
      });
      clearInterval(timerId);
      setTimeout(() => showGameOver(), 1000);
    }
  }

  // проверить закончена ли игра
  function gameOver() {
    let openedCardCnt = 0;
    for (let iCard of cardsArray) {
      if (iCard.opened) openedCardCnt++;
    }

    return openedCardCnt === heightGameField * widthGameField;
  }

  // показать форму "играть еще"
  function showGameOver() {
    const modalAgain = document.querySelector(".modal-again");
    const modal = document.querySelector(".modal-again__form");

    modalAgain.classList.add("modal-overlay--visible");
    modal.classList.remove("modal--visible");
    modal.classList.add("modal--visible");

    // restartGame();
  }

  function getFontSize() {
    const hSize = parseInt(document.querySelector(".card").clientHeight);
    const wSize = parseInt(document.querySelector(".card").clientWidth);
    return Math.min(hSize, wSize) - 4 + "px";
  }

  function initGame() {
    modalStart.classList.add("modal-overlay--visible");
    startForm.classList.add("modal--visible");

    startBtn.addEventListener("click", formSubmit);

    const inpHor = startForm.querySelector(".start-form__hor_size");
    inpHor.addEventListener("input", () => {
      if (parseInt(inpHor.value) > 10) {
        inpHor.value = 10;
        return false;
      } else if (parseInt(inpHor.value) < 2 || inpHor.value === "") {
        inpHor.value = 2;
        return false;
      }
    });

    const inpVert = startForm.querySelector(".start-form__vert_size");
    inpVert.addEventListener("input", () => {
      if (parseInt(inpVert.value) > 10) {
        inpVert.value = 10;
        return false;
      } else if (parseInt(inpVert.value) < 2 || inpVert.value === "") {
        inpVert.value = 2;
        return false;
      }
    });

    againBtn.addEventListener("click", () => {
      modalAgain.classList.remove("modal-overlay--visible");
      modal.classList.remove("modal--visible");
      const timer = document.querySelector(".timer__counter");
      timer.textContent = "";
      restartGame();
    });

    shuffle(fillArray(cardsArray, heightGameField * widthGameField));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < heightGameField; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < widthGameField; colIndex++) {
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

    timerValue = TIMER_START_VALUE;

    prevCard = null;
    prevCardIndex = null;
    containerGame.innerHTML = "";

    const timer = document.querySelector(".timer__counter");
    timer.classList.remove("color-orange");

    modalStart.classList.add("modal-overlay--visible");
    startForm.classList.add("modal--visible");

    shuffle(fillArray(cardsArray, heightGameField * widthGameField));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < heightGameField; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < widthGameField; colIndex++) {
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

    shuffle(fillArray(cardsArray, heightGameField * widthGameField));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < heightGameField; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      containerGame.append(cardList);

      for (let colIndex = 0; colIndex < widthGameField; colIndex++) {
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
    const timer = document.querySelector(".timer__counter");
    timer.textContent = "";

    modalStart.classList.remove("modal-overlay--visible");
    startForm.classList.remove("modal--visible");

    subtitle.classList.remove("modal-subtitle--visible");

    let widthSize = startForm.childNodes[3].value;
    let heightSize = startForm.childNodes[5].value;

    startForm.childNodes[3].value = "";
    startForm.childNodes[5].value = "";

    if (widthSize === "") widthSize = "4";
    if (heightSize === "") heightSize = "4";

    widthGameField = parseInt(widthSize);
    heightGameField = parseInt(heightSize);

    if (
      !(widthGameField >= 2 && widthGameField <= 10 && !(widthGameField & 1))
    ) {
      widthGameField = 4;
    }

    if (
      !(heightGameField >= 2 && heightGameField <= 10 && !(heightGameField & 1))
    ) {
      heightGameField = 4;
    }

    redrawField();

    clearInterval(timerId);
    timerId = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    const timer = document.querySelector(".timer__counter");
    timer.textContent = --timerValue;

    if (timerValue <= 0) {
      let list = containerGame.querySelectorAll(".list");
      let timer = document.querySelector(".timer__counter");

      subtitle.classList.add("modal-subtitle--visible");

      timer.classList.add("color-orange");

      list.forEach(function (el) {
        el.classList.add("finished");
      });
      clearInterval(timerId);
      setTimeout(() => showGameOver(), 1000);
    }
  }

  initGame();
})();
