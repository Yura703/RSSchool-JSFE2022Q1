import { selectText } from '../../constants/constants';
import { ProductPanel } from '../ProductPanel';
import './style.scss';

export function productSort(idHTMLElement: string) {
    const base = document.getElementById(idHTMLElement) as HTMLElement;

    const div = document.createElement('div');
    div.classList.add('sort');

    const span = document.createElement('span');
    span.innerText = 'Sort By';

    div.append(span);

    const sortSelect = document.createElement('select');
    sortSelect.classList.add('sort-select');
    for (let i = 0; i < selectText.SORT.length; i++) {
        const el = document.createElement('option');
        el.textContent = selectText.SORT[i];
        el.value = selectText.SORT[i];
        sortSelect.appendChild(el);
    }

    sortSelect.addEventListener('change', () => {
        window.localStorage.setItem('sort', sortSelect.value);
        const products = new ProductPanel();
        products.removeProducts();
        products.viewProducts();
    });

    div.append(sortSelect);

    base.append(div);
}
