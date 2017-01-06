import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../App'
import PersonComponent from '../components/PersonDetails.js'
import PersonDataComponent from '../components/PersonData.Detail.js'

export default (
  <Route path={"/"} component={App}>
    <IndexRoute component={PersonComponent}/>
    <Route path={"home"} component={PersonComponent}/>
    <Route path={"person/:id"} component={PersonDataComponent}/>
  </Route>
)
