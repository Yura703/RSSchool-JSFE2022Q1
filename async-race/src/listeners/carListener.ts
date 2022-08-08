import { deleteCar } from "../api/garage";
import { initUpdateSection, returnToStart, startMoving, updateGarage } from "../controller/carControlller/index";
import { store } from "../store/index";


export function carListener(cars: HTMLElement) {
  cars.addEventListener('click', async (event) => await selectAndRemove(event));
}

export function unDisableBtn(id: number, disableBtnA: boolean) {
  const btnA:HTMLButtonElement | null = document.querySelector(`#A${id}`);
  const btnB:HTMLButtonElement | null = document.querySelector(`#B${id}`);

  if ( btnA && btnB) {   
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
        updateGarage();
        break;

      case 'S':
        store.editCarId = id;  
        initUpdateSection(); 
        break;

      case 'A':
        startMoving(id);
        unDisableBtn(id, true);
        break;

      case 'B':
        returnToStart(id);
        unDisableBtn(id, false);
        break;
    
      default:
        break;
    }
}



