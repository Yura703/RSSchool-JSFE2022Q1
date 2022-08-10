import { disabledButton } from '../../controller/carControlller/index';
import { switchPagination } from '../../pages/garage/index';
import { createButton } from '../button/index';
import { createSection } from '../section/index';

export function createFooter() {
  const wrapper = createSection('body', 'footer', ['wrapper']);
  const footer = createSection(wrapper, 'div', ['footer']);

  const btnPrev = createButton(footer, 'PREV', ['footer__btn_perv']);
  btnPrev.disabled = true;
  const btnNext = createButton(footer, 'NEXT', ['footer__btn_next']);
  btnNext.disabled = true;
  btnNext.style.zIndex = '1';

  btnPrev.addEventListener('click', () => {
    void switchPagination(false);
    disabledButton();
  });
  btnNext.addEventListener('click', () => {
    void switchPagination(true);
    disabledButton();
  });
}
