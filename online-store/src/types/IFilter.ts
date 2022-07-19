import { ColorType } from './colorType';
import { FuelType } from './fuelType';
import { MakeType } from './makeType';
import { VehicleType } from './vehicleType';

export interface IFilter {
    text?: string;
    count?: [number, number];
    year?: [number, number];
    color?: ColorType[];
    make?: MakeType[];
    vehicle?: VehicleType[];
    fuel?: FuelType[];
    price?: [number, number];
    //favorites?: boolean;
}

export type ButtonType = {
    name: string;
};
