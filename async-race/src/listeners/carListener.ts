import { deleteCar } from "../api/garage";
import { initUpdateSection, updateGarage } from "../controller/carControlller/index";
import { store } from "../store/index";


export function carListener(cars: HTMLElement) {
    
//if (!cars) throw new Error('Target element does not exist');
  //select
cars.addEventListener('click', async (event) => {
  const element = event.target as HTMLButtonElement;
  if (element.id[0] === 'R') {
    await deleteCar(+element.id.slice(1));
    updateGarage(true);
  } else if (element.id[0] === 'S') {
  store.editCarId = +element.id.slice(1);  
  initUpdateSection(); 
}
});
}


// //remove
// cars.addEventListener('click', () => {

// });

// //A
// cars.addEventListener('click', () => {

// });

// //B
// cars.addEventListener('click', () => {

// });


