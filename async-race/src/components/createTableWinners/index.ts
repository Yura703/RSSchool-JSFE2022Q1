import { getCar } from '../../api/garage';
import { getWinners } from '../../api/winners';
import { constants } from '../../constants/index';
import { winnersTableSortListeners } from '../../listeners/winnersListeners';
import { store } from '../../store/index';
import { IWinnerResponse } from '../../types/IWinner';
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
  for (let i = 0; i < 5; i += 1) {
    createSection(target, 'td').innerHTML = winnersList[i];
  }
}

export async function getAllWinners(sort?: string, order?: string) {
  const page = store.pageWin;
  return getWinners({ page, limit: constants.limitTable, sort: sort ?? 'id', order: order ?? 'asc' });
}

export function updateCountWinners(count: number) {
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

function getDataAndFillTable(winners: IWinnerResponse, tbody: HTMLElement) {
  const promisesArray: Promise<void>[] = [];

  winners.items?.forEach((el) => {
    // eslint-disable-next-line no-async-promise-executor
    const promise: Promise<void> = new Promise(async () => {
      const { name, color } = await getCar(el.id);
      const strCarSVG = getStringSVG(constants.width, color);
      const trEl = createSection(tbody, 'tr');
      fillTable(trEl, [el.id.toString(), strCarSVG, name, el.wins.toString(), el.time.toString()]);
    });

    promisesArray.push(promise);
  });

  void Promise.all(promisesArray);
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

  await getDataAndFillTable(winners, tbody);

  winnersTableSortListeners();
}
