import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Subject, Observable} from 'rx';
import createContainer from 'rx-react-container';
import App from './components/Main.js';

const plusOne$ = new Subject();
const minusOne$ = new Subject();

const totalCount$ = Observable
          .merge(
              plusOne$.map(() => 1),
              minusOne$.map(() => -1))
          .startWith(0)
          .scan((acc, x) => acc + x, 0);

const app$ = createContainer(App, {totalCount$}, {plusOne$, minusOne$});
app$.forEach(renderApp => ReactDOM.render(renderApp(), document.getElementById('app')));
