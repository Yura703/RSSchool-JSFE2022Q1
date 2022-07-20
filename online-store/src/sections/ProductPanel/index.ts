import { ProductDB } from '../../db/ProductDB';
import { cars } from '../../db/Products';
import { IFilter } from '../../types/IFilter';
import { drawProducts } from '../drawProducts/drawProducts';
import { messages } from '../../constants/constants';
import { IProduct } from '../../types/IProduct';
import { quickSort } from '../../utils/sortProducts.ts';

export class ProductPanel {
    db: ProductDB;

    locStor: IFilter;

    constructor() {
        this.db = new ProductDB(cars);
        this.locStor = JSON.parse(window.localStorage.getItem('filter')!) as IFilter;
        this.viewProducts(this.locStor);
    }

    removeProducts() {
        const element = document.getElementById('products');
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }

    viewProducts(localStor?: IFilter) {
        const locStor: IFilter = localStor ? localStor : this.locStor;
        const fCars = this.db.getByPropertyInterval(locStor);
        const filterCars = this.#sortProducts(fCars);
        console.log(filterCars);

        if (filterCars) {
            this.removeProducts();
            for (let i = 0; i < filterCars.length; i++) {
                drawProducts(filterCars[i], 'products');
            }
        } else {
            this.removeProducts();
            const element = document.getElementById('products');
            if (element) {
                element.innerHTML = `<div style="
                                        font-size: 2rem;
                                        color: darkgreen;
                                        padding: 100px 217px 50px 50px;
                                    ">${messages.NO_MATCHES}</div>`;
            }
        }
    }

    #sortProducts(carsArray: IProduct[] | undefined) {
        const sortCondition: string | null = window.localStorage.getItem('sort');
        if (!sortCondition || !carsArray) {
            return carsArray;
        } else {
            switch (sortCondition) {
                case 'Name: UP':
                    return quickSort(carsArray, 'title', 0, carsArray.length - 1);
                    break;

                case 'Name: DOWN':
                    return quickSort(carsArray, 'title', 0, carsArray.length - 1)?.reverse();
                    break;

                case 'Year: UP':
                    return quickSort(carsArray, 'year', 0, carsArray.length - 1);
                    break;

                case 'Year: DOWN':
                    return quickSort(carsArray, 'year', 0, carsArray.length - 1)?.reverse();
                    break;

                case 'Quantity: UP':
                    return quickSort(carsArray, 'count', 0, carsArray.length - 1);
                    break;

                case 'Quantity: DOWN':
                    return quickSort(carsArray, 'count', 0, carsArray.length - 1)?.reverse();
                    break;

                case 'Price: UP':
                    return quickSort(carsArray, 'price', 0, carsArray.length - 1);
                    break;

                case 'Price: DOWN':
                    return quickSort(carsArray, 'price', 0, carsArray.length - 1)?.reverse();
                    break;

                default:
                    return carsArray;
            }
        }
    }
}
