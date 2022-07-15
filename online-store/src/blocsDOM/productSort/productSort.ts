//import { IProduct } from '../types/IProduct';
import './style.scss';

export function productSort(idHTMLElement: string) {
    const base = document.getElementById(idHTMLElement) as HTMLElement;

    const div = document.createElement('div');
    div.classList.add('sort');
    const span = document.createElement('span');
    span.innerText = 'Sort By';
    const input = document.createElement('input');
    input.type = 'select';

    div.append(span);
    div.append(input);
    base.append(div);
}
