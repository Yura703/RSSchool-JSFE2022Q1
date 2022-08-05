import { createCar, getCars, updateCar } from '../../api/garage';
import { CustomSelect } from '../../components/select/index';
import { CarBrand, CarModel } from '../../constants/cars';
import { renderCarsTrack } from '../../pages/garage/index';
import { store } from '../../store/index';
import { Car } from '../../types/Car';
import { ICarResponse } from '../../types/ICar';

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export function generateCar() {
  const color = `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
  const name = CarBrand[getRandomNumber(CarBrand.length)] + ' ' + CarModel[getRandomNumber(CarModel.length)];
  return new Car(name, color);
}

export async function generateCars(count: number) {
  
  const promiseArr = [];
  for (let i = 0; i < count; i++) {
    const car = generateCar();
    promiseArr.push(createCar(car));    
  }  
    
  if (store.carCount < 7) {
    promiseArr.push(renderCarsTrack('.garage')); 
  } else {
    store.carCount += 100; 
  }
    
  Promise.all(promiseArr).then(values => {   
    (<HTMLElement>document.querySelector('h1.count')).innerText = `Garage (${store.carCount})`;
  });
}

export async function getListCarsFromDB(page = 1, limit = 7) {
  const carRes: ICarResponse = await getCars(page, limit);
  if (carRes.count) store.carCount = carRes.count;

  return carRes;
}

export async function createNewCar(select: CustomSelect, inputColor: HTMLInputElement) {
  const name = select.value;
  const color = inputColor.value;

  const car = new Car(name, color);
  await createCar(car);

  updateGarage(false);
}

export async function updateSelectCar(select: CustomSelect, inputColor: HTMLInputElement) {
  const name = select.value;
  const color = inputColor.value;

  const car = new Car(name, color);
  await updateCar(store.editCarId, car);

  updateGarage(false);
}

export function disabledButton() {
  const pageMax = (store.carCount > 1) ? Math.ceil(store.carCount / 7) : 1; 

  if (store.carCount > 7) {
    const btnPrev: HTMLButtonElement | null = document.querySelector('.footer__btn_perv')
    const btnNext: HTMLButtonElement | null = document.querySelector('.footer__btn_next')

    if (!btnNext || !btnPrev) throw new Error('Target element does not exist');

    if (pageMax === 1) {
      btnPrev.disabled = true;
      btnNext.disabled = true;
    } else if(store.page === 1) {
      btnPrev.disabled = true;
      btnNext.disabled = false;
    } else if(store.page === pageMax) {   
      btnPrev.disabled = false;
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  } 
}

export async function updateGarage(deleteOrCreate: boolean) {
  if (deleteOrCreate) {
    await renderCarsTrack('.garage');
  } else {
    store.carCount < 7 ? await renderCarsTrack('.garage') : store.carCount += 1; 
  } 
  (<HTMLElement>document.querySelector('h1.count')).innerText = `Garage (${store.carCount})`;  
}

export function initUpdateSection() {
  const select: HTMLSelectElement | null = document.querySelector('select.update');
  const input: HTMLInputElement | null = document.querySelector('input.update');
  const btn: HTMLButtonElement | null = document.querySelector('.form__btn_update');

  if (select && input && btn) {  
      
    select.disabled = false;
    input.disabled = false;
    btn.disabled = false;
  }  
}
