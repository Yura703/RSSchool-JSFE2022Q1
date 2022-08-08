import { constants } from '../constants/index';
import { IEngineResponse } from '../types/ICar';
import { httpFetch } from './httpFetch';

const engine = `${constants.base}/engine`;

export const startedOrStopedEngine = async (id: number, status: string) => {
  const bodyReq = (await httpFetch<IEngineResponse>(`${engine}?id=${id}&status=${status}`,  {
    method: 'PATCH',
  })).parsedBody as IEngineResponse;

  return bodyReq;
};

export const drive = async (id: number) => {
  let req = false;
  try {    
    const res = await fetch(`${engine}?id=${id}&status=drive`,  {
      method: 'PATCH',
    });
    if (res && !(res instanceof Array) && res.status === 200) req = true;
    
  } catch (error) {
    console.log('Car brocken');
    
  } finally {    
      return { success: req };
  }
};

