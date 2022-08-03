import { createButton } from '../button/index';
import { constants } from '../createTableWinners/index';
import { createSection } from '../section/index';
import { getStringSVG } from './getStringSVG';

function ctreateDriveElements(target: HTMLElement, carModel: string) {
  const driveElements = createSection(target, 'div');
  createButton(driveElements, 'SELECT');
  createButton(driveElements, 'REMOVE');
  createSection(driveElements, 'h3').innerText = carModel;

  return driveElements;
}

function ctreateTrack(target: HTMLElement, carColor: string, idCar: string) {
  const track = createSection(target, 'div');
  createButton(track, 'A', ['car-A']);
  createButton(track, 'B', ['car-B']);
  const road = createSection(track, 'div', ['avto-road']);
  const avto = createSection(road, 'div', ['avto-svg']);
  avto.innerHTML = getStringSVG(constants.widthAvto, carColor);

  const img = createSection(road, 'img', ['flag']);
  (<HTMLImageElement>img).src = './assets/flag.png';
  (<HTMLImageElement>img).alt = 'flag';

  return track;
}

export function createCarTrack(target: HTMLElement, carModel: string, carColor: string) {
  const carTrack = createSection(target, 'div', ['car-track']);
  ctreateDriveElements(carTrack, carModel);
  ctreateTrack(carTrack, carColor, 'a123');

  return carTrack;
}
