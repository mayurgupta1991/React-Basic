import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import createStore from './store';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);