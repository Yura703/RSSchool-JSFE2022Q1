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
  "../../assets/pets/sophia.png",
  "../../assets/pets/timmy.png",
  "../../assets/pets/charly.png",
  "../../assets/pets/scarlett.png",
  "../../assets/pets/freddie.png",
];
let i = 0;

let fotoBloks = document.querySelectorAll("div.card__foto");

let nameBloks = document.querySelectorAll("div.card > p");

fotoBloks.forEach((el) => (el.style.background = `url("${fotoPets[i++]}")`));

i = 0;
nameBloks.forEach((el) => (el.innerText = namePets[i++]));
