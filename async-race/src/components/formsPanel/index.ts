import { createButton } from '../button/index';
import { createSection } from '../section/index';

function createCarPanel(target: HTMLElement) {
  createButton(target, 'CREATE', ['form__btn_create']);
}

function updateCarPanel(target: HTMLElement) {
  createButton(target, 'UPDATE', ['form__btn_update']);
}

function generateCarsPanel(target: HTMLElement) {
  createButton(target, 'RACE', ['form__btn_race']);
  createButton(target, 'RESET', ['form__btn_reset']);
  createButton(target, 'GENERATE CARS', ['form__btn_generate']);
}

export function createFormsPanel() {
  const formsPanel = createSection('.main', 'div', ['form']);
  const createCar = createSection(formsPanel, 'div', ['form__create-car']);
  const updateCar = createSection(formsPanel, 'div', ['form__update-car']);
  const generateCar = createSection(formsPanel, 'div', ['form__generate-car']);

  createCarPanel(createCar);
  updateCarPanel(updateCar);
  generateCarsPanel(generateCar);
}
