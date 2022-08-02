import { constants } from '../constants/index';
import { IEngineResponse } from '../types/ICar';
import { httpFetch } from './httpFetch';

const engine = `${constants.base}/engine`;

export const startedOrStopedEngine = async (id: number, status: string) => {
  const body = (await httpFetch<IEngineResponse>(`${engine}/${id}&status=${status}`)).parsedBody;

  return body;
};

export const drive = async (id: number) => {
  const res = await httpFetch<IEngineResponse>(`${engine}?id=${id}&status=drive`);

  if (res && !(res instanceof Array)) {
    return res.status !== 200 ? { success: false } : { success: true };
  } else throw new Error('Error initialed drive car');
};

export function fun() {
  console.log('engine');
}
