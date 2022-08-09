import { getCar } from '../../api/garage';
import { getWinners } from '../../api/winners';
import { constants } from '../../constants/index';
import { winnersTableSortListeners } from '../../listeners/winnersListeners';
import { store } from '../../store/index';
import { getStringSVG } from '../carTrack/getStringSVG';
import { createSection } from '../section/index';
export { constants } from '../../constants/index';
export { IWinnerQueryParams } from '../../types/IWinner';

function fillTitleTable(target: HTMLElement, tableRow: string[]) {
  for (let i = 0; i < tableRow.length; i++) {
    createSection(target, 'th').innerText = tableRow[i];
  }
}

function fillTable(target: HTMLElement, winnersList: string[]) {
  createSection(target, 'td').innerText = winnersList[0];
  createSection(target, 'td').innerHTML = winnersList[1];
  createSection(target, 'td').innerText = winnersList[2];
  createSection(target, 'td').innerText = winnersList[3];
  createSection(target, 'td').innerText = winnersList[4];
}

async function getAllWinners(sort?: string, order?: string) {
  const page = store.pageWin;
  return getWinners({ page, limit: constants.limit, sort: sort ?? 'id', order: order ?? 'asc' });
}

function updateCountWinners(count: number) {
  const winnersText = document.querySelector('h1');
  if (winnersText) winnersText.innerText = `Winners (${count})`;
}

export async function renderTableWinners(sort?: string, order?: string) {
  const winners = await getAllWinners(sort, order);
  if (winners.count) updateCountWinners(winners.count);

  const tbody = document.querySelector('tbody');
  if (!tbody) throw new Error('do not html element');
  tbody.innerHTML = '';

  winners.items?.forEach(async (el) => {
    const { name, color } = await getCar(el.id);
    const strCarSVG = getStringSVG(constants.width, color);
    const tr = createSection(tbody, 'tr');
    fillTable(tr, [el.id.toString(), strCarSVG, name, el.wins.toString(), el.time.toString()]);
  });
}

export async function createTableWinners(targetEl?: HTMLElement) {
  const winnersElement: HTMLElement | null = document.querySelector('winners');
  const target: HTMLElement | null = targetEl ?? winnersElement;
  if (!target) throw new Error('do not html element');
  const winners = await getAllWinners();
  if (winners.count) updateCountWinners(winners.count);
  const table = createSection(target, 'table', ['table']);
  const thead = createSection(table, 'thead');
  const tr = createSection(thead, 'tr');
  fillTitleTable(tr, constants.tableRow);
  const tbody = createSection(table, 'tbody');
  winners.items?.forEach(async (el) => {
    const { name, color } = await getCar(el.id);
    const strCarSVG = getStringSVG(constants.width, color);
    const trEl = createSection(tbody, 'tr');
    fillTable(trEl, [el.id.toString(), strCarSVG, name, el.wins.toString(), el.time.toString()]);
  });

  winnersTableSortListeners();
}
