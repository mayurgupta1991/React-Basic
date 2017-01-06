import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import createStore from './store';
import {Router, browserHistory} from 'react-router'
import routes from './routes'

const store = createStore();

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('main')
);