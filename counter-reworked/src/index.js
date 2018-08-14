import './styles.scss';

import { app } from './app/app';
import { view } from './app/view/view';
import { initialState } from './app/state/state';

const rootNode = document.querySelector('#app');

app(view, rootNode, initialState);
