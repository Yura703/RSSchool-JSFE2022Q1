import { CarBrand } from '../../constants/cars';
import { createNewCar, generateCars, updateSelectCar } from '../../controller/carControlller/index';
import { createButton } from '../button/index';
import { createSection } from '../section/index';
import { CustomSelect } from '../select/index';
import { updateCar } from '../../api/garage';

function createCarPanel(
  target: HTMLElement,
  params: string[],
  nameSelect: string,
  btnText: string,
  btnClasses: string[],
  disabled?: boolean
) {
  const classes = disabled ? 'update' : 'create';

  const select = new CustomSelect(params, target, nameSelect);
  select.addClasses(classes);
  const inputColor = (<HTMLInputElement>createSection(target, 'input', [classes]));
  inputColor.type = 'color';
  const btn = createButton(target, btnText, btnClasses);

  if (disabled) {
    select.disabled(true);
    inputColor.disabled = true;
    btn.disabled = true;

    btn.addEventListener('click', async () => await updateSelectCar(select, inputColor));
  } else btn.addEventListener('click', () => createNewCar(select, inputColor));
}

function generateCarsPanel(target: HTMLElement) {
  const btnRace = createButton(target, 'RACE', ['form__btn_race']);
  const btnReset = createButton(target, 'RESET', ['form__btn_reset']);
  const btnGenerate= createButton(target, 'GENERATE CARS', ['form__btn_generate']);
  btnRace.addEventListener('click', async() => await {});
  btnReset.addEventListener('click', async() => {});
  btnGenerate.addEventListener('click', async() => await generateCars(100));

}

export function createFormsPanel(target: HTMLElement) {
  const formsPanel = createSection(target, 'div', ['form']);
  const createCar = createSection(formsPanel, 'div', ['form__create-car']);
  const updateCar = createSection(formsPanel, 'div', ['form__update-car']);
  const generateCar = createSection(formsPanel, 'div', ['form__generate-car']);

  createCarPanel(createCar, CarBrand, 'carCreate', 'CREATE', ['form__btn_create']);
  createCarPanel(updateCar, CarBrand, 'carCreate', 'UPDATE', ['form__btn_update'], true);

  generateCarsPanel(generateCar);
}
