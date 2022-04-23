// const _pets = [
//   {
//     name: "Jennifer",
//     img: "../../assets/pets/jennifer.png",
//     type: "Dog",
//     breed: "Labrador",
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: "2 months",
//     inoculations: ["none"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Sophia",
//     img: "../../assets/pets/pets-katrine.png",
//     type: "Dog",
//     breed: "Shih tzu",
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: "1 month",
//     inoculations: ["parvovirus"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Woody",
//     img: "../../assets/pets/woody.png",
//     type: "Dog",
//     breed: "Golden Retriever",
//     description:
//       "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//     age: "3 years 6 months",
//     inoculations: ["adenovirus", "distemper"],
//     diseases: ["right back leg mobility reduced"],
//     parasites: ["none"],
//   },
//   {
//     name: "Scarlett",
//     img: "../../assets/pets/scarlett.png",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//     age: "3 months",
//     inoculations: ["parainfluenza"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Katrine",
//     img: "../../assets/pets/katrine.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//     age: "6 months",
//     inoculations: ["panleukopenia"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Timmy",
//     img: "../../assets/pets/timmy.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//     age: "2 years 3 months",
//     inoculations: ["calicivirus", "viral rhinotracheitis"],
//     diseases: ["kidney stones"],
//     parasites: ["none"],
//   },
//   {
//     name: "Freddie",
//     img: "../../assets/pets/freddie.png",
//     type: "Cat",
//     breed: "British Shorthair",
//     description:
//       "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//     age: "2 months",
//     inoculations: ["rabies"],
//     diseases: ["none"],
//     parasites: ["none"],
//   },
//   {
//     name: "Charly",
//     img: "../../assets/pets/charly.png",
//     type: "Dog",
//     breed: "Jack Russell Terrier",
//     description:
//       "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//     age: "8 years",
//     inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//     diseases: ["deafness", "blindness"],
//     parasites: ["lice", "fleas"],
//   },
// ];

const _namePets = [
  "Katrine",
  "Jennifer",
  "Woody",
  "Sophia",
  "Timmy",
  "Charly",
  "Scarlett",
  "Freddie",
];

const _fotoPets = [
  "../../assets/pets/katrine.png",
  "../../assets/pets/jennifer.png",
  "../../assets/pets/woody.png",
  "../../assets/pets/pets-katrine.png",
  "../../assets/pets/timmy.png",
  "../../assets/pets/charly.png",
  "../../assets/pets/scarlett.png",
  "../../assets/pets/freddie.png",
];

const BTN_START = document.querySelector(".btn-start");
const BTN_L = document.querySelector(".btn-left");
const BTN_NUM = document.querySelector(".active");
const BTN_R = document.querySelector(".btn-right");
const BTN_END = document.querySelector(".btn-end");
let countCards = 8;
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let numberPages = 1;
const arrayPets = randomeFillArray(arr); //сделать перемешивание

BTN_NUM.innerHTML = numberPages;

BTN_START.addEventListener("click", goStart);
BTN_L.addEventListener("click", goLeft);
BTN_R.addEventListener("click", goRight);
BTN_END.addEventListener("click", goEnd);

fillCards(arrayPets, numberPages, countCards);

function randomeFillArray(arr) {
  let arrPets = [];
  for (let i = 0; i < 7; i++) {
    arrPets = arrPets.concat(arr.sort(() => Math.random() - 0.5));
  }

  return arrPets;
}

function goStart(params) {
  if (numberPages !== 1) {
    numberPages = 1;
    BTN_NUM.innerHTML = numberPages;
    writeclassBtn(numberPages);
    fillCards(arrayPets, numberPages, countCards);
  }
}

function goEnd(params) {
  if (numberPages !== 6) {
    numberPages = 6;
    BTN_NUM.innerHTML = numberPages;
    writeclassBtn(numberPages);
    fillCards(arrayPets, numberPages, countCards);
  }
}

function goLeft(params) {
  if (numberPages !== 1) {
    BTN_NUM.innerHTML = --numberPages;
    writeclassBtn(numberPages);
    writeclassBtn(numberPages);
    fillCards(arrayPets, numberPages, countCards);
  }
}

function goRight(params) {
  if (numberPages !== 6) {
    BTN_NUM.innerHTML = ++numberPages;
    writeclassBtn(numberPages);
    writeclassBtn(numberPages);
    fillCards(arrayPets, numberPages, countCards);
  }
}

function writeclassBtn(numberPages) {
  if (numberPages === 1) {
    BTN_START.classList.remove("willactive");
    BTN_L.classList.remove("willactive");
    BTN_START.classList.add("inactive");
    BTN_L.classList.add("inactive");
    BTN_END.classList.remove("inactive");
    BTN_R.classList.remove("inactive");
    BTN_END.classList.add("willactive");
    BTN_R.classList.add("willactive");
  } else if (numberPages === 6) {
    BTN_END.classList.remove("willactive");
    BTN_R.classList.remove("willactive");
    BTN_END.classList.add("inactive");
    BTN_R.classList.add("inactive");
    BTN_START.classList.remove("inactive");
    BTN_L.classList.remove("inactive");
    BTN_START.classList.add("willactive");
    BTN_L.classList.add("willactive");
  } else {
    BTN_END.classList.add("willactive");
    BTN_R.classList.add("willactive");
    BTN_START.classList.add("willactive");
    BTN_L.classList.add("willactive");
  }
}

function fillCards(numbersCard, numberPages, countCards) {
  console.log(numbersCard);
  let fotoBloks = document.querySelectorAll("div.card__foto");
  let nameBloks = document.querySelectorAll("div.card > p");
  let index = (numberPages - 1) * 8;
  for (let i = 0; i < countCards; i++) {
    fotoBloks[i].style.background = `url("${
      _fotoPets[numbersCard[i + index]]
    }")`;
    nameBloks[i].innerText = _namePets[numbersCard[i + index]];
  }
}
