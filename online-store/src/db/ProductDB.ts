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
        const lsFavor = window.localStorage.getItem('favorites') === '2';
        if (lsFavor) {
            carsResult = carsResult.filter((object) => {
                return object.favorites;
            });
        }

        let key: keyof typeof obj;

        for (key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (obj[key] === 'All') {
                    continue;
                }

                switch (key) {
                    case 'text':
                        carsResult = carsResult.filter((car) => {
                            const str1 = car.title.toUpperCase();
                            const str2 = obj.text!.toUpperCase();
                            return str1.includes(str2);
                        });

                        break;

                    case 'count':
                        carsResult = carsResult.filter(
                            (car) =>
                                car[key as keyof IProduct] >= obj[key]![0] && car[key as keyof IProduct] <= obj[key]![1]
                        );

                        break;

                    case 'year':
                        carsResult = carsResult.filter(
                            (car) =>
                                car[key as keyof IProduct] >= obj[key]![0] && car[key as keyof IProduct] <= obj[key]![1]
                        );

                        break;

                    case 'color':
                        carsResult = carsResult.filter((car) => {
                            const arrColors = obj[key] as string[];
                            const color = car[key as keyof IProduct] as string;
                            return arrColors.indexOf(color) !== -1;
                        });

                        break;

                    case 'make':
                        carsResult = carsResult.filter((car) => car[key as keyof IProduct] === obj[key]);

                        break;

                    case 'vehicle':
                        carsResult = carsResult.filter((car) => car[key as keyof IProduct] === obj[key]);

                        break;

                    case 'fuel':
                        carsResult = carsResult.filter((car) => {
                            const arrFuel = obj[key] as string[];
                            const fuel = car[key as keyof IProduct] as string;
                            return arrFuel.indexOf(fuel) !== -1;
                        });

                        break;

                    case 'price':
                        carsResult = carsResult.filter(
                            (car) =>
                                car[key as keyof IProduct] >= obj[key]![0] && car[key as keyof IProduct] <= obj[key]![1]
                        );
                        break;

                    default:
                        break;
                }

                if (carsResult.length === 0) {
                    return;
                }
            }
        }

        return carsResult;
    }
}
