const namePets = [
  "Katrine",
  "Jennifer",
  "Woody",
  "Sophia",
  "Timmy",
  "Charly",
  "Scarlett",
  "Freddie",
];

const fotoPets = [
  "../../assets/pets/katrine.png",
  "../../assets/pets/jennifer.png",
  "../../assets/pets/woody.png",
  "../../assets/pets/pets-katrine.png",
  "../../assets/pets/timmy.png",
  "../../assets/pets/charly.png",
  "../../assets/pets/scarlett.png",
  "../../assets/pets/freddie.png",
];

let numberCards = getRandomeNumberCards([]);
let fotoBloks = document.querySelectorAll("div.card__foto");
let nameBloks = document.querySelectorAll("div.card > p");

for (let i = 0; i < 3; i++) {
  fotoBloks[3 + i].style.background = `url("${fotoPets[numberCards[i]]}")`;
  nameBloks[3 + i].innerText = namePets[numberCards[i]];
}

//карусель
const BTN_LEFT = document.querySelector(".btn-left");
const BTN_RIGHT = document.querySelector(".btn-right");
const SLIDER = document.querySelector("#slider");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const LEFT = true;
const RIGHT = false;

//запуск анимации
const moveLeft = () => {
  numberCards = getRandomeNumberCards(numberCards);
  initCard(numberCards, true);
  SLIDER.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  numberCards = getRandomeNumberCards(numberCards);
  initCard(numberCards, false);
  SLIDER.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

//действия после завершения анимации
SLIDER.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    SLIDER.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    SLIDER.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);

  //writeEventCard();
});

function getRandomeNumberCards(cardNambers) {
  let newCardsNumber = [];
  while (true) {
    const number = Math.floor(Math.random() * 7);
    if (
      cardNambers.indexOf(number) === -1 &&
      newCardsNumber.indexOf(number) === -1
    ) {
      newCardsNumber.push(number);
    }
    if (newCardsNumber.length === 3) {
      return newCardsNumber;
    }
  }
}

function initCard(numbers, direction) {
  const index = direction === true ? 0 : 6;
  for (let i = 0; i < 3; i++) {
    fotoBloks[index + i].style.background = `url("${fotoPets[numbers[i]]}")`;
    nameBloks[index + i].innerText = namePets[numbers[i]];
  }
}
