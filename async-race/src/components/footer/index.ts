import { switchPagination } from '../../pages/garage/index';
import { store } from '../../store/index';
import { createButton } from '../button/index';
import { createSection } from '../section/index';

function makeInactive(btnPrev: HTMLButtonElement, btnNext: HTMLButtonElement) {
  if (store.pageMax === 1) {
    btnPrev.disabled = true;
    btnNext.disabled = true;
  } else if(store.page === 1) {
    btnPrev.disabled = true;
    btnNext.disabled = false;
  } else if(store.page === store.pageMax) {   
    btnPrev.disabled = false;
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}

export function createFooter() {
  const wrapper = createSection('body', 'footer', ['wrapper']);
  const footer = createSection(wrapper, 'div', ['footer']);

  const btnPrev = createButton(footer, 'PREV', ['footer__btn_perv']);
  btnPrev.disabled = true;
  const btnNext = createButton(footer, 'NEXT', ['footer__btn_next']);
  btnNext.disabled = true;
  

  btnPrev.addEventListener('click', async () => {
    switchPagination(false);
    makeInactive(btnPrev, btnNext);
  });
  btnNext.addEventListener('click', async () => {
    switchPagination(true);
    makeInactive(btnPrev, btnNext);
  });

  
}
