import { createCarTrack } from '../../components/carTrack/index';
import { createFormsPanel } from '../../components/formsPanel/index';
import { createSection } from '../../components/section/index';

function createInfoPanel() {
  const infoPanel = createSection('.main', 'div', ['info']);
  const countCars = createSection(infoPanel, 'div', ['info__count']);
  createSection(countCars, 'h1').innerText = 'Garage (4)';

  const numberPages = createSection(infoPanel, 'div', ['info__page']);
  createSection(numberPages, 'h2').innerText = 'Page# 1';
}

export function createGarage() {
  createFormsPanel();
  createInfoPanel();
  const cars = createSection('.main', 'div');

  createCarTrack(cars, 'Audi', 'тут будет картинка авто');
}
