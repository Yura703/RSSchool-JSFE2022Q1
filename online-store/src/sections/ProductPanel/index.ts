import { ProductDB } from '../../db/ProductDB';
import { cars } from '../../db/Products';
import { IFilter } from '../../types/IFilter';
import { drawProducts } from '../drawProducts/drawProducts';
import { messages } from '../../constants/constants';

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
        const filterCars = this.db.getByPropertyInterval(locStor);

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
}
