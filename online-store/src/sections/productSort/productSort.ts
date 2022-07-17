//import { IProduct } from '../types/IProduct';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { selectText } from '../../constants/constants';
import './style.scss';

export function productSort(idHTMLElement: string) {
    const base = document.getElementById(idHTMLElement) as HTMLElement;

    const div = document.createElement('div');
    div.classList.add('sort');
    const span = document.createElement('span');
    span.innerText = 'Sort By';
    div.append(span);
    new CustomSelect(selectText.SORT, div, 'product');
    base.append(div);
}
