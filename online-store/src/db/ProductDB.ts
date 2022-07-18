/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { v4 as uuidv4 } from 'uuid';
import { IFilter } from '../types/IFilter';

import { IProduct } from '../types/IProduct';

export class ProductDB {
    cars: IProduct[] = [];

    constructor(cars: IProduct[]) {
        this.cars = cars;
    }

    add(car: Omit<IProduct, 'id'>) {
        const uuid = uuidv4();
        const newCar: IProduct = Object.assign(car, { id: uuid });
        this.cars.push(newCar);
    }

    remove(id: string) {
        this.cars = this.cars.filter((car) => car.id !== id);
    }

    getById(id: string) {
        return this.cars.filter((car) => car.id === id);
    }

    getByProperty(obj: Partial<IProduct>): IProduct[] | undefined {
        let carsResult = Object.assign(this.cars) as IProduct[];
        let key: keyof typeof obj;
        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                carsResult = carsResult.filter((car) => car[key] === obj[key]);
                if (carsResult.length === 0) {
                    return;
                }
            }
        }

        return carsResult;
    }

    getByPropertyInterval(obj: IFilter): IProduct[] | undefined {
        let carsResult = Object.assign(this.cars) as IProduct[];
        let key: keyof typeof obj;
        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (!Array.isArray(obj[key])) {
                    if (obj[key] === 'All') {
                        continue;
                    }
                    carsResult = carsResult.filter((car) => car[key as keyof IProduct] === obj[key]);
                } else {
                    carsResult = carsResult.filter(
                        (car) =>
                            car[key as keyof IProduct] >= obj[key]![0] && car[key as keyof IProduct] <= obj[key]![1]
                    );
                }
                if (carsResult.length === 0) {
                    return;
                }
            }
        }
        // console.log(carsResult);
        return carsResult;
    }
}
