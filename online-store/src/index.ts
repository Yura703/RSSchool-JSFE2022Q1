import 'normalize.css';
import './global.scss';
import './styles/style.scss';

import { FilterPanel } from './sections/FilterPanel';
import { driverEventListener } from './utils/driverEventListener';
import { ProductPanel } from './sections/ProductPanel';
import { productSort } from './sections/productSort/productSort';
import { Bucket } from './utils/Bucket.ts';
import { cars } from './db/Products';
import { IProduct } from './types/IProduct';
import { quickSort } from './utils/sortProducts.ts';

new FilterPanel('aside');

productSort('products-sort');

const productPanel = new ProductPanel();

driverEventListener(productPanel);

new Bucket(0);
