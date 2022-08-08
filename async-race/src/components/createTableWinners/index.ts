import { getCar } from '../../api/garage';
import { getWinners } from '../../api/winners';
import { constants } from '../../constants/index';
import { store } from '../../store/index';
import { Order, Sort } from '../../types/IWinner';
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
  //сделать интерфейс для списка и перебор обьекта
  createSection(target, 'td').innerText = winnersList[0];
  createSection(target, 'td').innerHTML = winnersList[1];
  createSection(target, 'td').innerText = winnersList[2];
  createSection(target, 'td').innerText = winnersList[3];
  createSection(target, 'td').innerText = winnersList[4];
}

async function getAllWinners() {
  const page = store.pageWin;
  return await getWinners({ page, limit:7, sort: Sort.id, order: Order.ASC }); 
}

function updateCountWinners(count: number) {
  const winnersText = document.querySelector('h1');
  if (winnersText) winnersText.innerText = `Winners (${count})`;
}

export async function createTableWinners(target: HTMLElement) {
  const winners = await getAllWinners();
  if (winners.count)  updateCountWinners(winners.count);
  const table = createSection(target, 'table', ['table']);
  const thead = createSection(table, 'thead');
  const tr = createSection(thead, 'tr');
  fillTitleTable(tr, constants.tableRow);
  const tbody = createSection(table, 'tbody');
  winners.items?.forEach(async (el) => {
    const { name, color } = await getCar(el.id);  
    const strCarSVG = getStringSVG(50, color);
    const tr = createSection(tbody, 'tr');
    fillTable(tr, [el.id.toString(), strCarSVG, name, el.wins.toString(), el.time.toString()]);
  }); 
}

// document.addEventListener('DOMContentLoaded', () => {

//   const getSort = function(event: Event) {
//       const target = event.target as HTMLTableCellElement;
//       if (!target) throw new Error('Do not event.target');
//       const order: number = (target.dataset.order -= -(target.dataset.order || -1));
//       const index: number = [...(target.parentNode as HTMLTableRowElement).cells].indexOf(target);
//       const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
//       const comparator = (index: number, order: number) => (a: { children: { innerHTML: string; }[]; }, b: { children: { innerHTML: string; }[]; }) => order * collator.compare(
//           a.children[index].innerHTML,
//           b.children[index].innerHTML
//       );
      
//       for(const tBody of target.closest('table').tBodies)
//           tBody.append(...[...tBody.rows].sort(comparator(index, order)));

//       for(const cell of target.parentNode.cells)
//           cell.classList.toggle('sorted', cell === target);
//   };
  
//   document.querySelectorAll('.table thead').forEach(tableTH => tableTH.addEventListener('click', (event) => getSort(event)));
  
// });


