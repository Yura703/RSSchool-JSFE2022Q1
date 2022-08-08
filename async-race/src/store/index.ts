export const store: storeType = {
  page: 1,
  carCount: 0,
  editCarId: 0,
  carsId: []
}

type storeType = {
  page: number,
  carCount: number,
  editCarId: number,
  carsId: carsIdType[]
}

type carsIdType = [number, number]