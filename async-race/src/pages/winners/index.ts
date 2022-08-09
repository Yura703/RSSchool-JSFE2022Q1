import { createTableWinners } from '../../components/createTableWinners/index';
import { createSection } from '../../components/section/index';

function createInfoPanel(target: HTMLElement) {
  const infoPanel = createSection(target, 'div', ['info']);
  const countCars = createSection(infoPanel, 'div', ['info__count']);
  createSection(countCars, 'h1').innerText = 'Winners (4)';

  const numberPages = createSection(infoPanel, 'div', ['info__page']);
  createSection(numberPages, 'h2').innerText = 'Page# 1';
}

export function createWinners() {
  const winners = createSection('.main', 'selection', ['winners', 'hidden']);
  createInfoPanel(winners);
  void createTableWinners(winners);
}
