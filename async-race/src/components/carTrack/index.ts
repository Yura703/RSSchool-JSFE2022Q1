import { createButton } from '../button/index';
import { createSection } from '../section/index';

function ctreateDriveElements(target: HTMLElement, carModel: string) {
  const driveElements = createSection(target, 'div');
  createButton(driveElements, 'SELECT');
  createButton(driveElements, 'REMOVE');
  createSection(driveElements, 'h3').innerText = carModel;

  return driveElements;
}

function ctreateTrack(target: HTMLElement, carPicture: string) {
  const track = createSection(target, 'div');
  createButton(track, 'A');
  createButton(track, 'B');
  createSection(track, 'div').innerHTML = carPicture;
  createSection(track, 'div').innerText = 'Флаг';

  return track;
}

export function createCarTrack(target: HTMLElement, carModel: string, carPicture: string) {
  const carTrack = createSection(target, 'div', ['car-track']);
  ctreateDriveElements(carTrack, carModel);
  ctreateTrack(carTrack, carPicture);

  return carTrack;
}
