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

  function createCard(cardSuit) {
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

    return card;
  }


  let prevCard = null;
  let openedCardsCnt = 0;

  function cardClick() {
    console.log(`opened cards: ${openedCardsCnt}`);

    let card = this;
    let cards = []
    let openedCards = document.querySelectorAll('.card--open');

    for (let cardIndex = 0; cardIndex < openedCards.length; cardIndex++) {
      cards.push(openedCards[cardIndex].childNodes[1].textContent);
    }


    // console.log(this.childNodes[1].textContent);

    if(cards.includes(this.childNodes[1].textContent) && openedCardsCnt === 14) {
      this.classList.add('card--open');
      // alert('finished');
      // setTimeout("alert('Игра окончена!');", 1);
      if(confirm('Играем еще?')) {
        resetGameData();
      }
    }
    else if (cards.includes(this.childNodes[1].textContent)) {
      console.log('карта есть в массиве');
      this.classList.add('card--open');
      prevCard = null;
      openedCardsCnt += 2;
    }
    else
    {
      console.log('такой карты еще нет');
      if (prevCard !== null) {
        prevCard.classList.remove('card--open');

      }
      prevCard = card;
      this.classList.add('card--open');
    }
  }

  function initGame() {
    const PAIRS_OF_NUMBERS = 8;
    const container = document.querySelector('.container');
    let arr = [];
    shuffle(fillArray(arr, PAIRS_OF_NUMBERS));

    let cardList = document.createElement('ul');
    cardList.classList.add('list');

    document.addEventListener("DOMContentLoaded", () => {
      container.append(cardList);

      for (let cardIndex = 0; cardIndex < PAIRS_OF_NUMBERS * 2; cardIndex++) {
        let card = createCard(arr[cardIndex]);
        cardList.append(card);
      }

    });
  }

  function resetGameData() {
    let x = document.querySelectorAll('.card--open');
    // for (let item of x) {
    //   console.log(item);
    //   item.classList.remove('card--open');
    // }
    prevCard = null;
    openedCardsCnt = 0;

    let container = document.querySelector('.container');
    container.innerHTML = '';

    initGame();
    return;
  }

  initGame();
})();
