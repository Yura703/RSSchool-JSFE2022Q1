import { createWinner, getWinner, updateWinner } from '../api/winners';
import { constants } from '../constants/index';
import { IWinner } from '../types/IWinner';

export async function verifyAndCreateWinner({ id, wins, time }: IWinner) {
  const winner = await getWinner(id);

  if (winner === constants.notFound) {
    void createWinner({ id, wins, time });
  } else {
    void updateWinner(id, {
      wins: (winner as IWinner).wins + 1,
      time: (winner as IWinner).time < time ? (winner as IWinner).time : time,
    });
  }
}
