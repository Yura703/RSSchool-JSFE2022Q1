import { ProductDB } from '../../db/ProductDB';
import { cars } from '../../db/Products';
import { IFilter } from '../../types/IFilter';
import { drawProducts } from '../drawProducts/drawProducts';
import { messages } from '../../constants/constants';

export class ProductPanel {
    db: ProductDB;

    constructor() {
        this.db = new ProductDB(cars);

        this.viewProducts({});
    }

    removeProducts() {
        const element = document.getElementById('products');
        if (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }

    viewProducts(localStor: IFilter) {
        const filterCars = this.db.getByPropertyInterval(localStor);
        console.log('123s', localStor);
        console.log('456s', filterCars);

        if (filterCars) {
            this.removeProducts();
            for (let i = 0; i < filterCars.length; i++) {
                drawProducts(filterCars[i], 'products');
            }
        } else {
            this.removeProducts();
            const element = document.getElementById('products');
            if (element) {
                element.innerText = messages.NO_MATCHES;
            }
        }
    }
}
