export function createBtn() {
  const body = document.querySelector('body');

  const btnToGarage = document.createElement('button');
  btnToGarage.innerText = 'TO GARAGE';

  const btnToWinners = document.createElement('button');
  btnToWinners.innerText = 'TO WINNERS';

  const btnPrev = document.createElement('button');
  btnPrev.innerText = 'PREV';

  const btnNext = document.createElement('button');
  btnNext.innerText = 'NEXT';

  body?.append(btnToGarage, btnToWinners, btnPrev, btnNext);
}
