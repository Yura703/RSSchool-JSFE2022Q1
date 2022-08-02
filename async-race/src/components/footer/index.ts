import { createButton } from '../button/index';
import { createSection } from '../section/index';

export function createFooter() {
  const wrapper = createSection('body', 'footer', ['wrapper']);
  const footer = createSection(wrapper, 'div', ['footer']);

  createButton(footer, 'PREV', ['footer__btn_perv']);
  createButton(footer, 'NEXT', ['footer__btn_next']);
}
