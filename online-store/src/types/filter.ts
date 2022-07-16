import { ColorType } from './colorType';
import { FuelType } from './fuelType';
import { MakeType } from './makeType';
import { VehicleType } from './vehicleType';

export interface IFilter {
    count?: [number, number];
    year?: [number, number];
    color?: ColorType[];
    make?: MakeType[];
    vehicle?: VehicleType[];
    fuel?: FuelType[];
    price?: [number, number];
}
