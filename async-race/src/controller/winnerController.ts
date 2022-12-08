import { createWinner, getWinner, updateWinner } from '../api/winners';
import { getAllWinners, renderTableWinners } from '../components/createTableWinners/index';
import { store } from '../store/index';
import { IWinner } from '../types/IWinner';

export async function verifyAndCreateWinner({ id, wins, time }: IWinner) {
  const winner = await getWinner(id);
  console.log(winner);

  if (winner && typeof winner !== 'number' && !(winner instanceof Array)) {
    void updateWinner(id, {
      wins: winner.wins + 1,
      time: winner.time < time ? winner.time : time,
    });
  } else {
    void createWinner({ id, wins, time });
  }
}

function undisableBtnWinnerPages(count: number) {
  const btnPrev: HTMLButtonElement | null = document.querySelector('.footer__btn_perv');
  const btnNext: HTMLButtonElement | null = document.querySelector('.footer__btn_next');
  const maxPage = Math.ceil(count / 10);

  if (!btnPrev || !btnNext) throw new Error('do not button in html');
  if (store.pageWin === 1) {
    btnNext.disabled = false;
    btnPrev.disabled = true;
  } else if (store.pageWin > 1 && store.pageWin < maxPage) {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  } else if (store.pageWin === maxPage) {
    btnNext.disabled = true;
    btnPrev.disabled = false;
  }
}

export async function switchPagesWinners() {
  const winners = await getAllWinners('id', 'ASC');
  if (winners.count) undisableBtnWinnerPages(winners.count);
  void renderTableWinners();
}
