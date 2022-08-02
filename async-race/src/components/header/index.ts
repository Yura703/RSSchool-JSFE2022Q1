import { createButton } from '../button/index';
import { createSection } from '../section/index';

export function createHeader() {
  const wrapper = createSection('body', 'header', ['wrapper']);
  const header = createSection(wrapper, 'div', ['header']);

  createButton(header, 'TO GARAGE', ['header__btn_to-garage']);
  createButton(header, 'TO WINNERS', ['header__btn_to-winners']);
}
