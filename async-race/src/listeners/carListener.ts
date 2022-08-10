import { deleteCar } from '../api/garage';
import { deleteWinner } from '../api/winners';
import { initUpdateSection, returnToStart, startMoving, updateGarage } from '../controller/carControlller/index';
import { store } from '../store/index';

export function unDisableBtn(id: number, disableBtnA: boolean) {
  const btnA: HTMLButtonElement | null = document.querySelector(`#A${id}`);
  const btnB: HTMLButtonElement | null = document.querySelector(`#B${id}`);

  if (btnA && btnB) {
    btnA.disabled = disableBtnA;
    btnB.disabled = !disableBtnA;
  }
}

async function selectAndRemove(event: MouseEvent) {
  const element = event.target as HTMLButtonElement;
  const id = +element.id.slice(1);

  switch (element.id[0]) {
    case 'R':
      await deleteCar(id);
      store.carsId = store.carsId.filter((el) => el[0] !== id);
      void deleteWinner(id);
      void updateGarage();
      break;

    case 'S':
      store.editCarId = id;
      void initUpdateSection();
      break;

    case 'A':
      void startMoving(id);
      unDisableBtn(id, true);
      break;

    case 'B':
      void returnToStart(id);
      unDisableBtn(id, false);
      break;

    default:
      break;
  }
}

export function carListener(cars: HTMLElement) {
  cars.addEventListener('click', async (event) => selectAndRemove(event));
}
