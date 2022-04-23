const pets = [
  {
    name: "Jennifer",
    img: "../../assets/pets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/pets/pets-katrine.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/pets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/pets/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/pets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/pets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/pets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/pets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

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

//попап
const POPUP_FOTO = document.querySelector(".content__foto");
const POPUP_NAME = document.querySelector(".content__text>h3");
const POPUP_TYPE = document.querySelector(".content__text>h4");
const POPUP_DESC = document.querySelector(".content__text>h5");
const POPUP_UL = document.querySelectorAll(".content__text>ul>li");
const CARD = document.querySelectorAll(".card");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_CONTENT = document.querySelector(".popup__content");
const BODY = document.querySelector(".body");

function writeCard(name) {
  pets.forEach((element) => {
    if (name === element.name) {
      writePopup(element);
    }
  });
}

function writePopup(obj) {
  POPUP_NAME.innerText = obj.name;
  POPUP_FOTO.style.background = `url("${obj.img}") no-repeat`;
  POPUP_TYPE.innerText = obj.type + " - " + obj.breed;
  POPUP_DESC.innerText = obj.description;
  POPUP_UL[0].innerHTML = "<b>Age</b>" + ": " + obj.age;
  POPUP_UL[1].innerHTML =
    "<b>Inoculations</b>" + ": " + obj.inoculations.join(", ");
  POPUP_UL[2].innerHTML = "<b>Diseases</b>" + ": " + obj.diseases.join(", ");
  POPUP_UL[3].innerHTML = "<b>Parasites</b>" + ": " + obj.parasites.join(", ");
}

const addClassPopup = () => {
  POPUP.classList.add("popup-open");
  BODY.style.overflow = "hidden";
};

const closePopupBtn = () => {
  POPUP.classList.remove("popup-open");
  BODY.style.overflow = "visible";
};

function writeEventCard(params) {
  CARD.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      //console.log(event);
      event.path.forEach((el) => {
        if (
          el.className === "card" ||
          el.className === "card card-one" ||
          el.className === "card card-two"
        ) {
          const name = el.querySelector("p").innerText;
          writeCard(name);
        }
      });
      addClassPopup();
    });
  });
}

writeEventCard();

POPUP_CLOSE.addEventListener("click", closePopupBtn);

POPUP.addEventListener("click", (event) => {
  if (event.target.className === "popup__body") {
    closePopupBtn();
  }
});
