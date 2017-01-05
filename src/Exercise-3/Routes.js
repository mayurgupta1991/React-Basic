/**
 * Created by ttn on 4/1/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './container/App'
import Login from './container/Login'
import Home from './container/Home'
import LoginFailed from './container/LoginFailed'
import AppCart from '../excercise2/container/Cart'
import AppWatch from '../excercise1/container/App'

export default (

  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="home" component={Home}>
      <Route path="/mycart" component={AppCart}/>
      <Route path="/mywatch" component={AppWatch}/>
    </Route>
    <Route path="loginFailed" component={LoginFailed}/>
  </Route>

)
