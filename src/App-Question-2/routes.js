import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './HomePage';
import LoginFailed from './LoginFailed';
import LoginPassed from './LoginPassed';
import PageNotFound from './PageNotFound';


export default (
  <Route path="/" component={App}>
    <IndexRoute component = {HomePage} />
    <Route path = "home" component = {LoginPassed} />
    <Route path = "loginFailed" component = {LoginFailed} />
    <Route path="*" component={PageNotFound} />
</Route>
);
