import { constants } from '../constants/index';
import { ICar } from '../types/ICar';

const garage = `${constants.base}/garage`;

export const getCars = async (page: number, limit: number) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  return {
    items: <ICar[]>await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: Omit<ICar, 'id'>) =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCar = async (id: string) =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    })
  ).json();

export const updateCar = async (id: string, body: Omit<ICar, 'id'>) =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
