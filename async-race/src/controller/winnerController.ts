import { createWinner, getWinner, getWinners, updateWinner } from "../api/winners";
import { IWinner } from "../types/IWinner";

export async function verifyAndCreateWinner({ id, wins, time}: IWinner) {  

  const winner = await getWinner(id);

  if (winner !== -1 && !(winner instanceof Array)) {
    updateWinner(id, {
      wins: winner.wins + 1,
      time: winner.time < time ? winner.time : time,
    });
  } else {
    createWinner({ id, wins, time});  
  }  
}
