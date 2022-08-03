import { createCarTrack } from '../../components/carTrack/index';
import { createFormsPanel } from '../../components/formsPanel/index';
import { createSection } from '../../components/section/index';

function createInfoPanel(target: HTMLElement) {
  const infoPanel = createSection(target, 'div', ['info']);
  const countCars = createSection(infoPanel, 'div', ['info__count']);

  createSection(countCars, 'h1').innerText = 'Garage (4)';
  const numberPages = createSection(infoPanel, 'div', ['info__page']);
  createSection(numberPages, 'h2').innerText = 'Page# 1';
}

export function createGarage() {
  const garage = createSection('.main', 'selection', ['garage']);
  createFormsPanel(garage);
  createInfoPanel(garage);
  const cars = createSection(garage, 'div');

  createCarTrack(cars, 'Audi', 'тут будет картинка авто');
}
