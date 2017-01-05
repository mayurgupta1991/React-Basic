import React from 'react';
import { connect } from 'react-redux';

import {
  fetchPersonDetails
} from './actions';

import PersonDetails from './components/PersonDetails';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
  componentDidMount() {
    this.props.getPersonAll();
  }

  render() {
    return (
      <div>
        <PersonDetails persons={this.props.personData.persons} />
      </div>
    )
  }
}

var AppComponent = connect((state) => {
  return state;
}, (dispatch) => {
  return {
      getPersonAll() {
      dispatch(fetchPersonDetails());
    }
  }
})(App);

export default AppComponent;
