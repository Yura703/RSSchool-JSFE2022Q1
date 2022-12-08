export const store: StoreType = {
  page: 1,
  pageWin: 1,
  carCount: 0,
  editCarId: 0,
  carsAnimation: [{ id: 0, flag: true }],
  carsId: [],
  wins: [],
};

type StoreType = {
  page: number;
  pageWin: number;
  carCount: number;
  editCarId: number;
  carsAnimation: { id: number; flag: boolean }[];
  carsId: CarsIdType[];
  wins: number[];
};

type CarsIdType = [number, number];
