(() => {
  // const PAIRS_OF_NUMBERS = 8;
  let ROW = 2;
  let COL = 2;

  const container = document.querySelector(".container");
  let cardsArray = [];

  let prevCard = null;
  let prevCardIndex = null;

  function fillArray(arr, totalItems) {
    for (let index = 1; index <= totalItems / 2; index++) {
      arr.push({ suit: index, opened: false });
      arr.push({ suit: index, opened: false });
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

  function createCard(cardSuit, cardCurrentIndex) {
    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card__back");
    cardBack.textContent = cardSuit;
    // cardBack.style.fontSize = 100 / (COL + 1) + "vh";

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

  function cardClick() {
    const curCardIndex = parseInt(this.childNodes[2].textContent);
    // console.log(`card index: ${curCardIndex}`);
    if (this.classList.contains("card--open")) return;

    // совпала с предыдущей - оставить открытой
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

    if (gameOver()) {
      let list = container.querySelectorAll(".list");

      list.forEach(function (el) {
        el.classList.add("finished");
      });
      // list.classList.add("finished");

      setTimeout(() => showGameOver(), 1000);
    }
  }

  function gameOver() {
    let openedCardCnt = 0;
    for (let iCard of cardsArray) {
      if (iCard.opened) openedCardCnt++;
    }

    return openedCardCnt === ROW * COL;
  }

  function createGameOverBlock() {
    const gameOverBlock = document.createElement("div");
    gameOverBlock.classList.add("block__game-over");

    const gameOverTitle = document.createElement("h1");
    gameOverTitle.classList.add("title__game-over");
    gameOverTitle.textContent = "Игра окончена!";

    const gameOverBtn = document.createElement("button");
    gameOverBtn.classList.add("btn__game-over");
    gameOverBtn.type = "submit";
    gameOverBtn.textContent = "Сыграть еще раз";
    gameOverBtn.addEventListener("click", restartGame);

    gameOverBlock.append(gameOverTitle);
    gameOverBlock.append(gameOverBtn);
    return gameOverBlock;
  }

  function createStartForm() {
    const formLegend = document.createElement('legend');
    formLegend.classList.add('form__legend');
    formLegend.textContent = 'Задайте размер игрового поля:';

    const inputHorizontal = document.createElement('input');
    inputHorizontal.classList.add('horizontal');
    inputHorizontal.name = 'horizontal';
    inputHorizontal.type = 'number';
    inputHorizontal.placeholder = 'По горизонтали';

    const inputVertical = document.createElement('input');
    inputVertical.classList.add('vertical');
    inputVertical.name = 'vertical';
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
    form.addEventListener('submit', initGame);

    form.append(formLegend);
    form.append(inputHorizontal);
    form.append(inputVertical);
    form.append(formBtn);

    return form;
  }

  function getStartData() {
    const startForm = createStartForm();
    container.append(startForm)
    COL = parseInt(startForm.horizontal.value);
    ROW = parseInt(startForm.vertical.value);
    return { 'hor': COL, 'vert': ROW };
  }

  function showGameOver() {
    let gameOverForm = createGameOverBlock();
    container.append(gameOverForm);
  }

  function getFontSize() {
    const hSize = parseInt(document.querySelector(".card").clientHeight);
    const wSize = parseInt(document.querySelector(".card").clientWidth);
    return Math.min(hSize, wSize) - 4 + "px";
  }

  function initGame() {
    console.log(getStartData());

    shuffle(fillArray(cardsArray, ROW * COL));
    let cardIndex = 0;

    for (let rowIndex = 0; rowIndex < ROW; rowIndex++) {
      const cardList = document.createElement("ul");
      cardList.classList.add("list");
      container.append(cardList);

      for (let colIndex = 0; colIndex < COL; colIndex++) {
        let card = createCard(cardsArray[cardIndex].suit, cardIndex++);
        cardList.append(card);
      }
    }

    const fSize = getFontSize();
    const x = container.querySelectorAll(".card__back");
    x.forEach(function (el) {
      el.style.fontSize = fSize;
    });
  }

  function restartGame() {
    cardsArray = [];

    prevCard = null;
    prevCardIndex = null;
    container.innerHTML = "";
    const startForm = createStartForm();
    container.append(startForm)
    initGame();
  }

  initGame();
})();
