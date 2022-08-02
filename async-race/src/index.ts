import 'normalize.css';
import './styles/style.scss';

import { createLayout } from './pages/layout/index';
import { createFormsPanel } from './components/formsPanel/index';
import { createGarage } from './pages/garage/index';
//!обработать все созданные ошибки

createLayout();
createGarage();
