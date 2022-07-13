import { ColorType } from './colorType';
import { FuelType } from './fuelType';
import { MakeType } from './makeType';
import { VehicleType } from './vehicleType';

export interface IProduct {
    id: string;
    title: string;
    count: number;
    year: string;
    color: ColorType;
    image: string;
    make: MakeType;
    vehicle: VehicleType;
    fuel: FuelType;
    price: number;
}
