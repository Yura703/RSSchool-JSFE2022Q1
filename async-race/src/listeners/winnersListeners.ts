import { renderTableWinners } from '../components/createTableWinners/index';
import { Order } from '../types/IWinner';

const flag = {
  number: true,
  wins: true,
  time: true,
};
let order: string;

export function winnersTableSortListeners() {
  const thSections = document.querySelectorAll('th');
  thSections.forEach((th) => {
    th.addEventListener('click', async (event: Event) => {
      const thElement = event.target as HTMLElement;
      switch (thElement.innerText) {
        case 'Number':
          order = flag.number ? Order[1] : Order[0];
          await renderTableWinners('id', order);
          flag.number = !flag.number;
          break;
        case 'Wins':
          order = flag.number ? Order[0] : Order[1];
          await renderTableWinners('wins', order);
          flag.number = !flag.number;
          break;
        case 'Best time (seconds)':
          order = flag.number ? Order[0] : Order[1];
          await renderTableWinners('time', order);
          flag.number = !flag.number;
          break;
        default:
          break;
      }
    });
  });
}
