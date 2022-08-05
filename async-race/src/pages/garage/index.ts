import { createCarTrack } from '../../components/carTrack/index';
import { createFormsPanel } from '../../components/formsPanel/index';
import { createSection } from '../../components/section/index';
import { disabledButton, generateCars, getListCarsFromDB } from '../../controller/carControlller/index';
import { carListener } from '../../listeners/carListener';
import { store } from '../../store/index';
import { Car } from '../../types/Car';
import { ICar, ICarResponse } from '../../types/ICar';

function createInfoPanel(target: HTMLElement) {
  const infoPanel = createSection(target, 'div', ['info']);
  const countCars = createSection(infoPanel, 'div', ['info__count']);  
  createSection(countCars, 'h1', ['count']).innerText = `Garage (${store.carCount})`;
  const numberPages = createSection(infoPanel, 'div', ['info__page']);
  createSection(numberPages, 'h2', ['page']).innerText = `Page #${store.page}`;
}

function checkForExistenceAndCreateOrDelete(target: HTMLElement) {
  const cars = document.querySelector('.cars');
  if (!cars) {
    return createSection(target, 'div', ['cars']);
  } else {
    cars.remove();
    return createSection(target, 'div', ['cars']);
  }
}

export async function renderCarsTrack(target: HTMLElement | string, carsList?: ICar | ICar[], count = 7) {

  const targetDiv: HTMLElement | null = (typeof target === 'string') ? document.querySelector(target) : target;
 
 if (!targetDiv) {
   throw new Error('target element does not exist');
 }
  const carList = carsList ?? (await getListCarsFromDB(store.page)).items;
  
  if (carList) {    
    const cars = checkForExistenceAndCreateOrDelete(targetDiv);
    carListener(cars);
  
    if (carList instanceof Array) {
  
      for (let i = 0; i < count; i++) {
        if (i >= carList.length) break;
        createCarTrack(cars, carList[i].name, carList[i].color, carList[i].id);
      }

    } else {
      createCarTrack(cars, carList.name, carList.color, carList.id);
    }    
  }  
  disabledButton();
}

export async function createGarage() {
  const carRes = await getListCarsFromDB(store.page);

  const garage = createSection('.main', 'selection', ['garage']);
  createFormsPanel(garage);  
  createInfoPanel(garage);

  await renderCarsTrack(garage, carRes.items);
}

export async function switchPagination(direction: boolean) {
  store.page = direction ? store.page + 1 : store.page - 1;

  const garage: HTMLElement | null = document.querySelector('.garage');
  const pageNumber: HTMLElement | null = document.querySelector('.page');
  if (pageNumber) pageNumber.innerText = `Page #${store.page}`;
  if (garage) {
    await renderCarsTrack(garage);
  }
} 
