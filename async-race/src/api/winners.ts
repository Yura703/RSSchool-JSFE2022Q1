import { constants } from '../constants/index';
import { IWinnerQueryParams, IWinner, IWinnerResponse } from '../types/IWinner';
import { httpFetch, HttpResponse } from './httpFetch';

const winners = `${constants.base}/winners`;

export const getWinners = async ({ page, limit, sort, order }: IWinnerQueryParams): Promise<IWinnerResponse> => {
  const { parsedBody, count }: HttpResponse<IWinner> = await httpFetch<IWinner>(
    `${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`,
  );

  return {
    items: parsedBody as IWinner[],
    count: count,
  };
};

export const getWinner = async (id: number) => {
  const winner = await httpFetch<IWinner>(`${winners}/${id}`);
  const status = winner.status;
  if (status === constants.OK) return winner.parsedBody;
  else return constants.notFound;
};

export const deleteWinner = async (id: number) => {
  const status = (await httpFetch<IWinner>(`${winners}/${id}`, { method: 'DELETE' })).status;

  return status === constants.OK;
};

export const createWinner = async (body: IWinner) => {
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
