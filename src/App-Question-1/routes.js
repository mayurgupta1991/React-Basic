import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import PageNotFound from './PageNotFound';



export default (
  <Route path="/" component={App}>
    <IndexRoute component = {HomePage} />
    <Route path = "home" component = {HomePage} />
    <Route path = "about" component = {AboutUs} />
    <Route path = "contact-us" component = {ContactUs} />
    <Route path="*" component={PageNotFound} />

</Route>
)
