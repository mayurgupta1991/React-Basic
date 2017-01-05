/**
 * Created by ttn on 4/1/17.
 */

import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'


import cartReducer from '../../excercise2/reducers'
import timerReducer from '../../excercise1/reducers'

const rootReducer = combineReducers({
  cart: cartReducer,
  timer: timerReducer,
  routing: routerReducer
})

export default rootReducer
