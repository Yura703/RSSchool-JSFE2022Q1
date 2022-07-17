import 'normalize.css';
import './global.scss';
import './styles/style.scss';

import { FilterPanel } from './sections/FilterPanel';
import { driverEventListener } from './utils/driverEventListener';
import { ProductPanel } from './sections/ProductPanel';

new ProductPanel();

new FilterPanel('aside');

driverEventListener();
