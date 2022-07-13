import 'normalize.css';
import './global.scss';
import './styles/style.scss';

// import header from './Header/index';

// const root = <HTMLElement>document.getElementById('root');

// root.append(<Node>header);
import { pricesSlider } from '../src/noUiSlider/myNoUiSlider';
import { drawProducts } from './drawProducts/drawProducts';
import { cars } from './db/Products';
pricesSlider();

for (let i = 0; i < cars.length; i++) {
    drawProducts(cars[i], 'products');
}
//drawProducts(cars[0], 'products');
