import { createButton } from '../button/index';
import { constants } from '../createTableWinners/index';
import { createSection } from '../section/index';
import { getStringSVG } from './getStringSVG';

function ctreateDriveElements(target: HTMLElement, carModel: string, id: number) {
  const driveElements = createSection(target, 'div');
  const btnSelect = createButton(driveElements, 'SELECT');
  btnSelect.id = 'S' + id.toString();
  const btnRemove = createButton(driveElements, 'REMOVE');
  btnRemove.id = 'R' + id.toString();
  btnRemove.style.zIndex = '1';
  createSection(driveElements, 'h3').innerText = carModel;

  return driveElements;
}

function ctreateTrack(target: HTMLElement, carColor: string, id: number) {
  const track = createSection(target, 'div');
  const btnA = createButton(track, 'A', ['car-A']);
  btnA.id = 'A' + id.toString();
  const btnB = createButton(track, 'B', ['car-B']);
  btnB.id = 'B' + id.toString();
  btnB.disabled = true;
  const road = createSection(track, 'div', ['avto-road']);
  const avto = createSection(road, 'div', ['avto-svg']);
  avto.innerHTML = getStringSVG(constants.widthAvto, carColor);
  avto.id = 'C' + id.toString();

  const img = createSection(road, 'img', ['flag']);
  (<HTMLImageElement>img).src = './assets/flag.png';
  (<HTMLImageElement>img).alt = 'flag';

  return track;
}

export function createCarTrack(target: HTMLElement, carModel: string, carColor: string, id: number) {
  const carTrack = createSection(target, 'div', ['car-track']);
  ctreateDriveElements(carTrack, carModel, id);
  ctreateTrack(carTrack, carColor, id);

  return carTrack;
}
