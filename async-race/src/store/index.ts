export const store: storeType = {
  page: 1,
  pageWin: 1,
  carCount: 0,
  editCarId: 0,
  carsId: [], 
  wins: []
}

type storeType = {
  page: number,
  pageWin: number,
  carCount: number,
  editCarId: number,
  carsId: carsIdType[], 
  wins: number[]
}

type carsIdType = [number, number]