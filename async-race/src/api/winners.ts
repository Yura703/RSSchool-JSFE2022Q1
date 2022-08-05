import { constants } from '../constants/index';
import { IWinnerQueryParams, IWinner, Sort, Order, IWinnerResponse } from '../types/IWinner';
import { httpFetch, HttpResponse } from './httpFetch';

const winners = `${constants.base}/winners`;

export const getWinners = async ({ page, limit, sort, order }: IWinnerQueryParams): Promise<IWinnerResponse> => {
  const { parsedBody, count }: HttpResponse<IWinner> = await httpFetch<IWinner>(
    `${winners}?_page=${page}&_limit=${limit}$&_sort=${sort}&_order=${order}`,
  );

  return {
    items: parsedBody as IWinner[],
    count: count,
  };
};

export const getWinner = async (id: number) => {
  const winner = (await httpFetch<IWinner>(`${winners}/${id}`)).parsedBody;

  if (winner) return winner;
  else throw new Error('This ID does not exist');
};

export const deleteWinner = async (id: string) => {
  const status = (await httpFetch<IWinner>(`${winners}/${id}`, { method: 'DELETE' })).status;

  return status === 200;
};

export const createWinner = async (body: Omit<IWinner, 'id'>) => {
  const winnerRes = await httpFetch<IWinner>(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const winner = winnerRes.parsedBody;

  if (!(winner instanceof Array) && winner) return winner;
  else throw new Error('Object creation failed');
};

export const updateWinner = async (id: number, body: Omit<IWinner, 'id'>) => {
  const winnerRes = await httpFetch<IWinner>(`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const winner = winnerRes.parsedBody;

  if (!(winner instanceof Array) && winner) return winner;
  else throw new Error('Object update failed');
};

// export const saveWinner = async ({ id, time }: Omit<IWinner, 'wins'>) => {
//   const winnerStatus = await getWinnerStatus(id);

//   if (winnerStatus === 400) {
//     await createWinner({
//       wins: 1,
//       time,
//     });
//   } else {
//     const winner = await getWinner(id);
//     await updateWinner(id, {
//       wins: winner.wins + 1,
//       time: time < winner.time ? time : winner.time,
//     });
//   }
// };

