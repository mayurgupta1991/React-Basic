/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Router, browserHistory }  from 'react-router';
import App from './App';
import ImportRoutes from './routes';

let app = document.getElementById('main');


render(<Router routes={ImportRoutes} history = {browserHistory}> </Router>, app);
