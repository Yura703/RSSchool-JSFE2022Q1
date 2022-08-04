import { switchPages } from '../../controller/switchPages/index';
import { createButton } from '../button/index';
import { createSection } from '../section/index';

export function createHeader() {
  const wrapper = createSection('body', 'header', ['wrapper']);
  const header = createSection(wrapper, 'div', ['header']);

  const btnToGarage = createButton(header, 'TO GARAGE', ['header__btn_to-garage']);
  const btnToWinners = createButton(header, 'TO WINNERS', ['header__btn_to-winners']);

  btnToGarage.addEventListener('click', () => switchPages(true));
  btnToWinners.addEventListener('click', () => switchPages(false));
}
