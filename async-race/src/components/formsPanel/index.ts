import { createButton } from '../button/index';
import { createSection } from '../section/index';
import { CustomSelect } from '../select/index';

function createCarPanel(
  target: HTMLElement,
  params: string[],
  nameSelect: string,
  btnText: string,
  btnClasses: string[],
) {
  new CustomSelect(params, target, nameSelect);
  (<HTMLInputElement>createSection(target, 'input')).type = 'color';
  createButton(target, btnText, btnClasses);
}

function generateCarsPanel(target: HTMLElement) {
  createButton(target, 'RACE', ['form__btn_race']);
  createButton(target, 'RESET', ['form__btn_reset']);
  createButton(target, 'GENERATE CARS', ['form__btn_generate']);
}

export function createFormsPanel(target: HTMLElement) {
  const formsPanel = createSection(target, 'div', ['form']);
  const createCar = createSection(formsPanel, 'div', ['form__create-car']);
  const updateCar = createSection(formsPanel, 'div', ['form__update-car']);
  const generateCar = createSection(formsPanel, 'div', ['form__generate-car']);

  createCarPanel(createCar, ['A', 'B', 'C', 'D', 'E', 'F'], 'carCreate', 'CREATE', ['form__btn_create']);
  createCarPanel(updateCar, ['A', 'B', 'C', 'D', 'E', 'F'], 'carCreate', 'UPDATE', ['form__btn_update']);

  generateCarsPanel(generateCar);
}
