import { CarBrand } from '../../constants/cars';
import { createNewCar, generateCars, updateSelectCar, returnToStart, startMoving } from '../../controller/carControlller/index';
import { createButton } from '../button/index';
import { createSection } from '../section/index';
import { CustomSelect } from '../select/index';
import { updateCar } from '../../api/garage';
import { store } from '../../store/index';
import { unDisableBtn } from '../../listeners/carListener';

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
  btnReset.disabled = true;
  const btnGenerate= createButton(target, 'GENERATE CARS', ['form__btn_generate']);
  btnRace.addEventListener('click', async() => {
    store.wins = [];
    let promisseArray: Promise<void>[] = [];
    const elements = document.querySelectorAll('.avto-svg');
    elements.forEach(async element => {
      const id =  +element.id.slice(1);
      unDisableBtn(id, true);
      promisseArray.push(startMoving(id));
    });    
    const win =  Promise.all(promisseArray).then();  
    btnRace.disabled = true;
    btnReset.disabled = false;
  });
  btnReset.addEventListener('click', async() => {    
    let promisseArray: Promise<void>[] = [];
    store.carsId.forEach(async element => {
      unDisableBtn(element[0], false);
      promisseArray.push(returnToStart(element[0]));
    });    
    Promise.all(promisseArray).then();
    btnReset.disabled = true;
    btnRace.disabled = false;
  });
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
