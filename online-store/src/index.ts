import 'normalize.css';
import './global.scss';
import './styles/style.scss';

import { FilterPanel } from './sections/FilterPanel';
import { driverEventListener } from './utils/driverEventListener';
import { ProductPanel } from './sections/ProductPanel';
import { productSort } from './sections/productSort/productSort';
import { Bucket } from './utils/Bucket.ts';

new FilterPanel('aside');

productSort('products-sort');

new ProductPanel();

driverEventListener();

new Bucket(0);
