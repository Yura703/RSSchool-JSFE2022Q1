import { constants } from '../constants/index';
import { Sort, Order } from '../types/IWinner';

const engine = `${constants.base}/engine`;

export const startEngine = async (id: number) => (await fetch(`${engine}/${id}&status=started`)).json();

export const stopEngine = async (id: number) => (await fetch(`${engine}/${id}&status=stopped`)).json();

export const drive = async (id: number) => {
  const res = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { success: true };
};

export const getSortOrder = (sort: Sort, order: Order) => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
};

export function fun() {
  console.log('engine');
}
