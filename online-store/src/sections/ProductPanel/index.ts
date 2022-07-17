import { ProductDB } from '../../db/ProductDB';
import { cars } from '../../db/Products';
import { IFilter } from '../../types/IFilter';
import { drawProducts } from '../drawProducts/drawProducts';
import { productSort } from '../productSort/productSort';

export class ProductPanel {
    db: ProductDB;

    constructor() {
        productSort('products');
        this.db = new ProductDB(cars);

        this.viewProducts({});
    }

    viewProducts(localStor: IFilter) {
        const filterCars = this.db.getByPropertyInterval(localStor);
        if (filterCars) {
            for (let i = 0; i < filterCars.length; i++) {
                drawProducts(filterCars[i], 'products');
            }
        } else {
            const elem = document.querySelectorAll('cart');
            elem.forEach((el) => {
                el.parentNode!.removeChild(el);
            });
        }
    }
}
