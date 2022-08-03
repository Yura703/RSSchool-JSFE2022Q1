import { constants } from '../../constants/index';
import { createSection } from '../section/index';
export { constants } from '../../constants/index';

function fillTitleTable(target: HTMLElement, tableRow: string[]) {
  for (let i = 0; i < tableRow.length; i++) {
    createSection(target, 'th').innerText = tableRow[i];
  }
}

function fillTable(target: HTMLElement, winnersList: string[]) {
  let i = 0;
  //сделать интерфейс для списка и перебор обьекта
  createSection(target, 'td').innerText = winnersList[(i += 1)];
  createSection(target, 'td').innerText = winnersList[(i += 1)];
  createSection(target, 'td').innerText = winnersList[(i += 1)];
  createSection(target, 'td').innerText = winnersList[(i += 1)];
  createSection(target, 'td').innerText = winnersList[i];
}

export function createTableWinners(target: HTMLElement) {
  const table = createSection(target, 'table', ['table']);
  const tr = createSection(table, 'tr');
  fillTitleTable(tr, constants.tableRow);
  fillTable(table, ['1', '2', '3', '4', '5']);
}
