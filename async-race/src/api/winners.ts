// import { constants } from '../constants/index';
// import { ICar } from '../types/ICar';
// import { IWinnerQueryParams, IWinner } from '../types/IWinner';
// import { getSortOrder } from './engine';
// import { getCar } from './garage';

// const winners = `${constants.base}/winners`;

// export const getWinners = async ({ page, limit, sort, order }: IWinnerQueryParams) => {
//   const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
//   const items: IWinner[] = (await response.json()) as IWinner[];
//   return {
//     items: await Promise.all(items.map(async (winner) => ({ ...winner, car: await getCar(winner.id) }))),
//     count: response.headers.get('X-Total-Count'),
//   };
// };

// export const getWinner = async (id: number) => (await fetch(`${winners}/${id}`)).json();

// export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

// export const deleteWinner = async (id: string) =>
//   (
//     await fetch(`${winners}/${id}`, {
//       method: 'DELETE',
//     })
//   ).json();

// export const createWinner = async (body: Omit<IWinner, 'id'>) =>
//   (
//     await fetch(winners, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

// export const updateWinner = async (id: number, body: Omit<IWinner, 'id'>) =>
//   (
//     await fetch(`${winners}/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   ).json();

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

export function funW() {
  console.log('winners');
}
