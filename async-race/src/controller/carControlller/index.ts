import { drive, startedOrStopedEngine } from '../../api/engine';
import { createCar, getCars, getCar, updateCar } from '../../api/garage';
import { CustomSelect } from '../../components/select/index';
import { CarBrand, CarModel } from '../../constants/cars';
import { constants } from '../../constants/index';
import { renderCarsTrack } from '../../pages/garage/index';
import { store } from '../../store/index';
import { Car } from '../../types/Car';
import { ICar, ICarResponse, IEngineResponse } from '../../types/ICar';
import { verifyAndCreateWinner } from '../winnerController';

const animSet = new Set();

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

export function generateCar() {
  const color = `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(255)})`;
  const name = CarBrand[getRandomNumber(CarBrand.length)] + ' ' + CarModel[getRandomNumber(CarModel.length)];
  return new Car(name, color);
}

export function generateCars(count: number) {
  const promiseArr = [];
  for (let i = 0; i < count; i++) {
    const car = generateCar();
    promiseArr.push(createCar(car));
  }

  if (store.carCount < constants.limit) {
    promiseArr.push(renderCarsTrack('.garage'));
  } else {
    store.carCount += 100;
  }

  void Promise.all(promiseArr).then(() => {
    (<HTMLElement>document.querySelector('h1.count')).innerText = `Garage (${store.carCount})`;
  });
}

export async function getListCarsFromDB(page = 1, limit = constants.limit) {
  const carRes: ICarResponse = await getCars(page, limit);
  if (carRes.count) store.carCount = carRes.count;

  return carRes;
}

export async function updateGarage() {
  await renderCarsTrack('.garage');
  (<HTMLElement>document.querySelector('h1.count')).innerText = `Garage (${store.carCount})`;
}

export async function createNewCar(select: CustomSelect, inputColor: HTMLInputElement) {
  const name = select.value;
  const color = inputColor.value;

  const car = new Car(name, color);
  await createCar(car);

  void updateGarage();
}

export async function updateSelectCar(select: CustomSelect, inputColor: HTMLInputElement) {
  const name = select.value;
  const color = inputColor.value;

  const car = new Car(name, color);
  await updateCar(store.editCarId, car);

  void updateGarage();
}

export function disabledButton() {
  const pageMax = store.carCount > 1 ? Math.ceil(store.carCount / constants.limit) : 1;

  if (store.carCount > constants.limit) {
    const btnPrev: HTMLButtonElement | null = document.querySelector('.footer__btn_perv');
    const btnNext: HTMLButtonElement | null = document.querySelector('.footer__btn_next');

    if (!btnNext || !btnPrev) throw new Error('Target element does not exist');

    if (pageMax === 1) {
      btnPrev.disabled = true;
      btnNext.disabled = true;
    } else if (store.page === 1) {
      btnPrev.disabled = true;
      btnNext.disabled = false;
    } else if (store.page === pageMax) {
      btnPrev.disabled = false;
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  }
}

function getCarName(fullName: string) {
  return CarBrand.filter((name) => fullName.includes(name))[0];
}

export async function initUpdateSection() {
  const select: HTMLSelectElement | null = document.querySelector('select.update');
  const input: HTMLInputElement | null = document.querySelector('input.update');
  const btn: HTMLButtonElement | null = document.querySelector('.form__btn_update');

  if (select && input && btn) {
    select.disabled = false;
    input.disabled = false;
    btn.disabled = false;

    const car = await getCar(store.editCarId);
    select.value = getCarName(car.name);
    input.value = car.color;
  }
}

function startAnimation(duration: number, target: HTMLElement, id: number) {
  const start = performance.now();

  let requestId = requestAnimationFrame(function animate(time) {
    const timeFraction = (time - start) / duration;

    target.style.left = (timeFraction * 100).toString() + '%';

    const carError = animSet.has(id);

    if (timeFraction < 1 && carError) {
      requestId = requestAnimationFrame(animate);
    }
  });

  return requestId;
}

function writeWinner(car: ICar, duration: number) {
  const span = document.querySelector('span') ?? document.createElement('span');

  span.innerText = `${car.name} won with time ${duration} s`;
  span.style.color = 'gold';
  span.style.paddingLeft = '5%';
  document.querySelector('.count')?.appendChild(span);

  void verifyAndCreateWinner({ id: car.id, wins: 1, time: duration });
}

export async function startMoving(id: number, target?: HTMLElement) {
  try {
    animSet.add(id);
    const car: HTMLElement | null = target ? target : document.querySelector(`#C${id}`);

    if (!car) throw new Error('Not existing car ID');

    const { velocity, distance }: IEngineResponse = await startedOrStopedEngine(id, 'started');

    const duration: number = distance / velocity;

    const requestId = startAnimation(duration, car, id);
    store.carsId.push([id, requestId]);

    const reqDriveCar = await drive(id);

    if (!reqDriveCar.success) {
      animSet.delete(id);

      console.log(`car ${id} brocken 500`);
      cancelAnimationFrame(requestId);
    } else {
      const carFromDb = await getCar(id);
      if (store.wins.length === 0) writeWinner(carFromDb, Math.round(duration) / 1000);
      store.wins.push(id);
    }
  } catch (err) {
    console.log('Error moving');
  }
}

export async function returnToStart(id: number) {
  const car: HTMLElement | null = document.querySelector(`#C${id}`);
  animSet.delete(id);

  const stoppedCar = await startedOrStopedEngine(id, 'stopped');

  store.carsId.filter((el) => el[0] === id);

  if (stoppedCar && car) {
    car.style.left = '0%';
  }
}
