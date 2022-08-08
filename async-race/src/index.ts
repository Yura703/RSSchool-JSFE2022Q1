import 'normalize.css';
import './styles/style.scss';

import { createLayout } from './pages/layout/index';
import { createGarage } from './pages/garage/index';
import { createWinners } from './pages/winners/index';
//!обработать все созданные ошибки

createLayout();
createGarage();
createWinners();


