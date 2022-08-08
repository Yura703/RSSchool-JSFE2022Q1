import { deleteCar } from "../api/garage";
import { initUpdateSection, returnToStart, startMoving, updateGarage } from "../controller/carControlller/index";
import { store } from "../store/index";


export function carListener(cars: HTMLElement) {
  cars.addEventListener('click', async (event) => await selectAndRemove(event));
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
        break;

      case 'B':
        returnToStart(id);
        break;
    
      default:
        break;
    }
}



