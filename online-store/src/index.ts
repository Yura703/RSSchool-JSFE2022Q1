import 'normalize.css';
import './global.scss';
import './styles/style.scss';

// import header from './Header/index';

// const root = <HTMLElement>document.getElementById('root');

// root.append(<Node>header);
import { NoUiSlider } from './components/noUiSlider/myNoUiSlider';
import { drawProducts } from './blocsDOM/drawProducts/drawProducts';
import { cars } from './db/Products';
import { productSort } from './blocsDOM/productSort/productSort';
import { CustomSelect } from './components/CustomSelect/CustomSelect';
import { InputText } from './components/input-text';
import { FilterPanel } from './blocsDOM/filterPanel';
//NoUiSlider();
productSort('products');

for (let i = 0; i < cars.length; i++) {
    drawProducts(cars[i], 'products');
}
drawProducts(cars[0], 'products');
// const cSelect = new CustomSelect(['1111', '2222', '3333', '4444', '5555'], 'products');
// cSelect.addEventListener((e) => console.log(e.type));
// //cSelect.on('click', (e) => alert(e));

new FilterPanel('aside');

document.addEventListener('slider', function (event) {
    const customEvent = event as CustomEvent;
    console.log(customEvent.detail);
});
