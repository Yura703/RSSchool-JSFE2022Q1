import { createFooter } from '../../components/footer/index';
import { createHeader } from '../../components/header/index';
import { createSection } from '../../components/section/index';

export function createLayout() {
  createHeader();

  const wrapper = createSection('body', 'main', ['wrapper']);
  createSection(wrapper, 'main', ['main']);

  createFooter();
}
