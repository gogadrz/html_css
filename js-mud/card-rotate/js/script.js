(() => {
  const pairsOfNumbers = 8;

  function fillArray(arr, pairsOfNumbers) {
    for (let index = 1; index <= pairsOfNumbers; index++) {
      arr.push(index);
      arr.push(index);
    }
    return arr;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function createCard() {
    const cardFront = document.createElement("div");
    cardFront.classList.add("card__front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card__back");

    const card = document.createElement("div");
    card.classList.add("card");

    card.append(cardFront);
    card.append(cardBack);

    card.addEventListener("click", cardClick);

    function cardClick() {
      console.log(this.childNodes[1].textContent);
    }
    return card;
  }

  let arr = [];
  shuffle(fillArray(arr, pairsOfNumbers));
  console.log(arr);

  document.addEventListener("DOMContentLoaded", () => {
    const cardList = document.querySelector(".list");
    for (let index = 0; index < pairsOfNumbers * 2; index++) {
      let card = createCard();
      cardList.append(card);
      // console.log(index);
      card.childNodes[1].textContent = arr[index];
    }

    // console.log(card);
    // card.childNodes[1].textContent = 'add';
    // let card = document.querySelector('.card');
    // console.log(card.childNodes[3].textContent);
  });

  // function showAlert() { console.log('clicked') };
})();
