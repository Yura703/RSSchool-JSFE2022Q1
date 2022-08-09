export const store: storeType = {
  page: 1,
  pageWin: 1,
  carCount: 0,
  editCarId: 0,
  carsAnimation: [{id: 0, flag: true}],
  carsId: [], 
  wins: []
}

type storeType = {
  page: number,
  pageWin: number,
  carCount: number,
  editCarId: number,
  carsAnimation: {id: number, flag: boolean}[],
  carsId: carsIdType[], 
  wins: number[]
}

type carsIdType = [number, number]