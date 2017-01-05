import {createStore} from 'redux'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import RootReducer from '../reducers/'

const store = createStore(RootReducer);
export default store;
