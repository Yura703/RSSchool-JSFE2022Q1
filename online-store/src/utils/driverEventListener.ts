import { events, selectText } from '../constants/constants';
import { MyLocalStorage } from './MyLocalStorage';
import { ButtonType, IFilter } from '../types/IFilter';
import { ProductPanel } from '../sections/ProductPanel';
import { IProduct } from '../types/IProduct';

export function driverEventListener() {
    const ls = new MyLocalStorage();
    const productPanel = new ProductPanel();

    for (let i = 0; i < events.length; i++) {
        document.addEventListener(events[i], function (event) {
            const customEvent = event as CustomEvent;

            ls.value = customEvent.detail as IFilter;

            productPanel.viewProducts(ls.value);
        });
    }

    document.addEventListener('button-filter', function (event) {
        const customEvent = event as CustomEvent;
        const value = customEvent.detail as ButtonType;

        if (value.name === 'Clear Settings') {
            ls.remove();
        } else if (value.name === 'Favorites') {
            const lsValue = window.localStorage.getItem('favorites') as string;
            if (lsValue === '1') {
                window.localStorage.setItem('favorites', '2');
            } else {
                window.localStorage.setItem('favorites', '1');
            }

            productPanel.viewProducts();
        }
        //productPanel.removeProducts();
    });

    for (let i = 0; i < selectText.SORT.length; i++) {
        document.addEventListener(selectText.SORT[i], function (event) {
            const customEvent = event as CustomEvent;

            // ls.value = customEvent.detail as IFilter;

            // productPanel.viewProducts(ls.value);
            console.log('789', customEvent.detail);
        });
    }

    // const form = document.querySelector('form');
    // form!.addEventListener('submit', function (event) {
    //     event.preventDefault();
    // });
}
