import { events } from '../constants/constants';
import { MyLocalStorage } from './MyLocalStorage';
import { ButtonType, IFilter } from '../types/IFilter';
import { ProductPanel } from '../sections/ProductPanel';

export function driverEventListener() {
    const ls = new MyLocalStorage();
    const productPanel = new ProductPanel();

    for (let i = 0; i < events.length; i++) {
        document.addEventListener(events[i], function (event) {
            const customEvent = event as CustomEvent;

            ls.value = customEvent.detail as IFilter;

            productPanel.viewProducts(ls.value);
            console.log('789', ls.value);
        });
    }

    document.addEventListener('button-filter', function (event) {
        const customEvent = event as CustomEvent;
        const value = customEvent.detail as ButtonType;

        if (value.name === 'Clear Settings') {
            ls.remove();
        }
        productPanel.removeProducts();
    });
}
