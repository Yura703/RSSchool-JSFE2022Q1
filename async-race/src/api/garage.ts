import { constants } from '../constants/index';
import { ICar, ICarResponse } from '../types/ICar';
import { httpFetch, HttpResponse } from './httpFetch';

const garage = `${constants.base}/garage`;

export const getCars = async (page: number, limit: number): Promise<ICarResponse> => {
  const { parsedBody, count }: HttpResponse<ICar> = await httpFetch<ICar>(`${garage}?_page=${page}&_limit=${limit}`);

  return {
    items: parsedBody,
    count: count,
  };
};

export const getCar = async (id: number): Promise<ICar> => {
  const car = (await httpFetch<ICar>(`${garage}/${id}`)).parsedBody;

  if (!(car instanceof Array) && car) return car;
  else throw new Error('This ID does not exist');
};

export const createCar = async (body: Omit<ICar, 'id'>): Promise<ICar> => {
  const carRes = await httpFetch<ICar>(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const car = carRes.parsedBody;

  if (!(car instanceof Array) && car) return car;
  else throw new Error('Object creation failed');
};

export const deleteCar = async (id: number) => {
  const res = await httpFetch<ICar>(`${garage}/${id}`, { method: 'DELETE' });

  return res.status === 200;
};

export const updateCar = async (id: number, body: Omit<ICar, 'id'>) => {
  const carRes = await httpFetch<ICar>(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (carRes.status === 200) return carRes.parsedBody;
  else throw new Error('Object update failed');
};

// export function funG() {
//   async function asd() {
//     console.log(await getCars(1, 10));
//     console.log(await getCar(9));
//     console.log(await createCar({ name: 'Audi8', color: '#6c779f' }));
//     //console.log(await deleteCar(7));
//     console.log(await updateCar(4, { name: 'Audi55', color: '#6c779f' }));
//   }
//   asd();
// }
