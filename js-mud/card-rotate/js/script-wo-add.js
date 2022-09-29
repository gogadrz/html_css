(() => {
  const PAIRS_OF_NUMBERS = 8;
  const container = document.querySelector(".container");
  let cardsArray = [];

  let prevCard = null;
  let prevCardIndex = null;

  function fillArray(arr, pairsCount) {
    for (let index = 1; index <= pairsCount; index++) {
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

    const cardIndex = document.createElement("div");
    cardIndex.classList.add("card__index");
    cardIndex.textContent = cardCurrentIndex;

    const card = document.createElement("li");
    card.classList.add("card");

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
      let list = container.querySelector(".list");
      list.classList.add("finished");

      setTimeout(() => showGameOver(), 1000);
    }
  }

  function gameOver() {
    let openedCardCnt = 0;
    for (let iCard of cardsArray) {
      if (iCard.opened) openedCardCnt++;
    }

    return openedCardCnt === PAIRS_OF_NUMBERS * 2;
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

  function showGameOver() {
    let gameOverForm = createGameOverBlock();
    container.append(gameOverForm);
  }

  function initGame() {
    shuffle(fillArray(cardsArray, PAIRS_OF_NUMBERS));

    const cardList = document.createElement("ul");
    cardList.classList.add("list");

    container.append(cardList);

    for (let cardIndex = 0; cardIndex < PAIRS_OF_NUMBERS * 2; cardIndex++) {
      let card = createCard(cardsArray[cardIndex].suit, cardIndex);
      cardList.append(card);
    }
  }

  function restartGame() {
    cardsArray = [];

    prevCard = null;
    prevCardIndex = null;
    container.innerHTML = "";
    initGame();
  }

  initGame();
})();
