import { IFilter } from '../../types/IFilter';

export class MyLocalStorage {
    myLocalStorage: IFilter;

    constructor() {
        const ls: string | null = window.localStorage.getItem('filter');
        if (ls) {
            this.myLocalStorage = <IFilter>JSON.parse(ls);
        } else {
            this.myLocalStorage = {};
        }
    }

    public get value(): IFilter {
        return this.myLocalStorage;
    }

    public set value(object: IFilter) {
        this.myLocalStorage = this.#approveFilter(object, this.myLocalStorage);
        window.localStorage.setItem('filter', JSON.stringify(this.myLocalStorage));
    }

    public remove() {
        window.localStorage.removeItem('filter');
        this.myLocalStorage = {};
    }

    #approveFilter(object: IFilter, myLocalStorage: IFilter) {
        //let key: keyof typeof object;
        // for (key in object) {
        //     if (Object.prototype.hasOwnProperty.call(object, key)) {
        //         myLocalStorage[key] = object[key]; //?ошибка - type меняется с ИЛИ(|) на И(&)
        //     }
        // }
        if (Object.prototype.hasOwnProperty.call(object, 'text')) myLocalStorage.text = object.text;
        if (Object.prototype.hasOwnProperty.call(object, 'count')) myLocalStorage.count = object.count;
        if (Object.prototype.hasOwnProperty.call(object, 'year')) myLocalStorage.year = object.year;
        if (Object.prototype.hasOwnProperty.call(object, 'color')) myLocalStorage.color = object.color;
        if (Object.prototype.hasOwnProperty.call(object, 'make')) myLocalStorage.make = object.make;
        if (Object.prototype.hasOwnProperty.call(object, 'vehicle')) myLocalStorage.vehicle = object.vehicle;
        if (Object.prototype.hasOwnProperty.call(object, 'fuel')) myLocalStorage.fuel = object.fuel;
        if (Object.prototype.hasOwnProperty.call(object, 'price')) myLocalStorage.price = object.price;

        return myLocalStorage;
    }
}
