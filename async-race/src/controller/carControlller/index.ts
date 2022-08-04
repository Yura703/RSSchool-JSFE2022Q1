import { createCar, getCars } from '../../api/garage';
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
  store.carCount += 100; 
  (<HTMLElement>document.querySelector('h1.count')).innerText = `Garage (${store.carCount})`;

  for (let i = 0; i < count; i++) {
    const car = generateCar();
    await createCar(car);
  }  
  
  if (store.carCount < 107) await renderCarsTrack('.garage');//! сделать отключение кнопок, пока отработает добавление машин в БД - 4 сек
}

export async function getListCarsFromDB(page = 1, limit = 7) {
  const carRes: ICarResponse = await getCars(page, limit);
  if (carRes.count) store.carCount = carRes.count;

  return carRes;
}

export function createNewCar(select: CustomSelect, inputColor: HTMLInputElement) {
  const name = select.value;
  const color = inputColor.value;

  const car = new Car(name, color);
  console.log(car);//!добавить сохраниене в БД и вывод на экран
  
}
